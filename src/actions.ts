import * as vscode from 'vscode'
import { type } from 'os'

export type Action = ActionKinds | ActionKinds[]

export type ActionKinds = string | Conditional | Command | Keymap

export interface Conditional {
    condition: string
    [branch: string]: Action
}

export interface Command {
    command: string
    args?: {} | string
}

export interface Keymap {
    [key: string]: Action
}

type Cursor =
    | "block"
    | "block-outline"
    | "line"
    | "line-thin"
    | "underline"
    | "underline-thin"
    | undefined

let insertCursorStyle: vscode.TextEditorCursorStyle
let normalCursorStyle: vscode.TextEditorCursorStyle
let searchCursorStyle: vscode.TextEditorCursorStyle
let startInNormalMode: boolean
let rootKeymap: Keymap
let keymap: Keymap
let lastCommand: string
let keySequence: string[] = []

export function getInsertCursorStyle(): vscode.TextEditorCursorStyle {
    return insertCursorStyle
}

export function getNormalCursorStyle(): vscode.TextEditorCursorStyle {
    return normalCursorStyle
}

export function getSearchCursorType(): vscode.TextEditorCursorStyle {
    return searchCursorStyle
}

export function getStartInNormalMode(): boolean {
    return startInNormalMode
}

export function setLastCommand(command: string) {
    lastCommand = command
}

export function updateFromConfig(): void {
    const config = vscode.workspace.getConfiguration("modaledit")
    const keybindings = config.get<object>("keybindings")
    if (isKeymap(keybindings)) {
        rootKeymap = keybindings
        keymap = rootKeymap
    }
    insertCursorStyle = toVSCursorStyle(
        config.get<Cursor>("insertCursorStyle", "line"))
    normalCursorStyle = toVSCursorStyle(
        config.get<Cursor>("normalCursorStyle", "block"))
    searchCursorStyle = toVSCursorStyle(
        config.get<Cursor>("searchCursorStyle", "underline"))
    startInNormalMode = config.get<boolean>("startInNormalMode", true)
}

function isAction(x: any): x is Action {
    return isString(x) || isConditional(x) || isCommand(x) || isKeymap(x) ||
        isActionSequence(x)
}

function isString(x: any): x is string {
    return x && typeof x === "string"
}

function isObject(x: any): boolean {
    return x && typeof x === "object"
}

function isActionSequence(x: any): x is ActionKinds[] {
    return Array.isArray(x) && x.every(isAction)
}

function isConditional(x: any): x is Conditional {
    return isObject(x) && isString(x.condition) &&
        Object.keys(x).every(key => 
            key === "condition" || isAction(x[key]))
}

function isCommand(x: any): x is Command {
    return isObject(x) && isString(x.command) &&
        (!x.args || isObject(x.args) || isString(x.args))
}

function isKeymap(x: any): x is Keymap {
    return isObject(x) && !isConditional(x) && !isCommand(x) &&
        Object.values(x).every(isAction)
}

function toVSCursorStyle(cursor: Cursor): vscode.TextEditorCursorStyle {
    switch (cursor) {
        case "line": return vscode.TextEditorCursorStyle.Line
        case "block": return vscode.TextEditorCursorStyle.Block
        case "underline": return vscode.TextEditorCursorStyle.Underline
        case "line-thin": return vscode.TextEditorCursorStyle.LineThin
        case "block-outline": return vscode.TextEditorCursorStyle.BlockOutline
        case "underline-thin": return vscode.TextEditorCursorStyle.UnderlineThin
        default: return vscode.TextEditorCursorStyle.Line
    }
}

async function executeVSCommand(command: string, ...rest: any[]): Promise<void> {
    try {
        await vscode.commands.executeCommand(command, ...rest)
        lastCommand = command
    }
    catch (error) {
        vscode.window.showErrorMessage(error.message)
    }
    keySequence = []
}

function evalString(str: string, selecting: boolean): any {
    let __selecting = selecting
    let __file = undefined
    let __line = undefined
    let __col = undefined
    let __char = undefined
    let editor = vscode.window.activeTextEditor
    if (editor) {
        let cursor = editor.selection.active
        __file = editor.document.fileName
        __line = cursor.line
        __col = cursor.character
        __char = editor.document.getText(new vscode.Range(cursor, 
            cursor.translate({ characterDelta: 1 })))
    }
    try {
        return eval(`(${str})`)
    }
    catch (error) {
        vscode.window.showErrorMessage("Evaluation error: " + error.message)
    }
}

async function executeConditional(cond: Conditional, selecting: boolean): 
    Promise<void> {
    let res = evalString(cond.condition, selecting)
    let branch = isString(res) ? res : JSON.stringify(res)
    if (branch && isAction(cond[branch]))
        await execute(cond[branch], selecting)
}

async function executeCommand(action: Command, selecting: boolean) {
    if (action.args) {
        if (typeof action.args === 'string')
            await executeVSCommand(action.command, 
                evalString(action.args, selecting))
        else
            await executeVSCommand(action.command, action.args)
    }
    else
        await executeVSCommand(action.command)
}

async function execute(action: Action, selecting: boolean): Promise<void> {
    keymap = rootKeymap
    if (isString(action))
        await executeVSCommand(action)
    else if (isActionSequence(action))
        for (const subAction of action)
            await execute(subAction, selecting)
    else if (isConditional(action))
        await executeConditional(action, selecting)
    else if (isCommand(action))
        await executeCommand(action, selecting)
    else if (isKeymap(action))
        keymap = action
}

export async function handleKey(key: string, selecting: boolean,
    capture: boolean) {
    keySequence.push(key)
    if (capture && lastCommand)
        executeVSCommand(lastCommand, key)
    else if (keymap && keymap[key])
        await execute(keymap[key], selecting)
    else {
        vscode.window.showWarningMessage("ModalEdit: Undefined key binding: " +
            keySequence.join(" - "))
        keySequence = []
        keymap = rootKeymap
    }
}