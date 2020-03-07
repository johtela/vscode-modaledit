/**
 * # Actions and Configuration
 * 
 * This module defines the data types used in the configuration file. It also
 * includes functions to execute commands defined in configuration. First we 
 * need to import VS Code definitions. 
 */
import * as vscode from 'vscode'
/**
 * ## Action Definitions
 * 
 * The configuration consist of _actions_ that can take many forms. First of 
 * all, an action can be a single command or sequence of commands (array).
 */
export type Action = Command | Keymap | number
/**
 * A singular action can be either a command name (string), a conditional 
 * action, command with parameters, or a keymap (dictionary) which points to
 * further actions.
 */
export type Command = string | Conditional | Parameterized | Command[]
/**
 * A conditional action consist of condition (duh) and set of branches to take
 * depending on the result of the condition.
 */
export interface Conditional {
    condition: string
    [branch: string]: Command
}
/**
 * A command which requires arguments need to be defined using the `Command`
 * interface. Arguments can be defined either as an object or string, which
 * is evaluated on the fly.
 */
export interface Parameterized {
    command: string
    args?: {} | string
}
/**
 * A keymap is a dictionary of keys (characters) to actions. With keymaps you
 * can define commands that require multiple keypresses.
 */
export interface Keymap {
    id: number
    [key: string]: Action
}
/**
 * ## Cursor Shapes
 * 
 * You can use various cursor shapes in different modes. The list of available
 * shapes is defined below.
 */
type Cursor =
    | "block"
    | "block-outline"
    | "line"
    | "line-thin"
    | "underline"
    | "underline-thin"
    | undefined
/**
 * ## Configuration State
 *
 * The variables below contain the current cursor configuration.
 */
let insertCursorStyle: vscode.TextEditorCursorStyle
let normalCursorStyle: vscode.TextEditorCursorStyle
let searchCursorStyle: vscode.TextEditorCursorStyle
/**
 * Another thing you can set in config, is whether ModalEdit starts in normal
 * mode. 
 */
let startInNormalMode: boolean
/**
 * The root of the action configuration is keymap. This defines what key 
 * sequences will be run when keys are pressed in normal mode.
 */
let rootKeymap: Keymap
/**
 * The current active keymap is stored here. The active keymap changes when the
 * user invokes a multi-key action sequence.
 */
let keymap: Keymap
/**
 * The last command run is also stored. This is needed to run commands which
 * capture the keyboard.
 */
let lastCommand: string
/**
 * The key sequence that user has pressed is stored for error reporting 
 * purposes.
 */
let keySequence: string[] = []

let keymapsById: { [id: number]: Keymap }

let outputChannel: vscode.OutputChannel
/**
 * ## Configuration Accessors
 * 
 * The following functions return the current configuration settings.
 */
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
/**
 * You can also set the last command from outside the module.
 */
export function setLastCommand(command: string) {
    lastCommand = command
}

export function setOutputChannel(channel: vscode.OutputChannel) {
    outputChannel = channel
}
/**
 * ## Update Configuration from settings.json
 * 
 * Whenever the user saves either global `settings.json` or the one located
 * in the `.vsode` directory VS Code calls this function that updates the
 * current configuration.
 */
export function updateFromConfig(): void {
    const config = vscode.workspace.getConfiguration("modaledit")
    const keybindings = config.get<object>("keybindings")
    outputChannel.appendLine("Validating keybindings in 'settings.json'...")
    if (isKeymap(keybindings)) {
        rootKeymap = keybindings
        keymap = rootKeymap
        keymapsById = {}
        errors = 0
        validateAndExpandKeymaps(keymap)
        if (errors > 0)
            outputChannel.appendLine(
                `Found ${errors} error${errors > 1 ? "s": ""}. ` +
                "Keybindings might not work correctly.")
        else
            outputChannel.appendLine("Validation completed succesfully.")
    }
    else if (keybindings)
        outputChannel.appendLine(
            "ERROR: Invalid configuration structure. Keybindings not updated.")
    insertCursorStyle = toVSCursorStyle(
        config.get<Cursor>("insertCursorStyle", "line"))
    normalCursorStyle = toVSCursorStyle(
        config.get<Cursor>("normalCursorStyle", "block"))
    searchCursorStyle = toVSCursorStyle(
        config.get<Cursor>("searchCursorStyle", "underline"))
    startInNormalMode = config.get<boolean>("startInNormalMode", true)
}

let errors: number

function validateAndExpandKeymaps(keybindings: Keymap) {
    function error(message: string) {
        outputChannel.appendLine("ERROR: " + message)
        errors++
    }
    if (typeof keybindings.id === 'number')
        keymapsById[keybindings.id] = keybindings
    for (let key in keybindings) {
        if (keybindings.hasOwnProperty(key) && key != "id") {
            let target = keybindings[key]
            if (isKeymap(target))
                validateAndExpandKeymaps(target)
            else if (typeof target === 'number') {
                let id = target
                target = keymapsById[id]
                if (!target)
                    error(`Undefined keymap id: ${id}`)
                else
                    keybindings[key] = target
            }
            if (key.length == 3 && key[1] == '-') {
                let first = key.charCodeAt(0)
                let last = key.charCodeAt(2)
                if (first > last) 
                    error(`Invalid key range: "${key}"`)
                else
                    for (let i = first; i <= last; i++)
                        keybindings[String.fromCharCode(i)] = target
            }
            else if (key.length != 1)
                error(`Invalid key binding: "${key}"`)
        }
    }
}

/**
 * The helper function below converts cursor styles specified in configuration 
 * to enumeration members used by VS Code.
 */
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
/**
 * ## Type Predicates
 * 
 * Since JavaScript does not have dynamic type information we need to write
 * functions that check which type of action we get from the configuration. 
 * First we define a high-level type predicate that checks if a value is
 * an action.
 */
function isAction(x: any): x is Action {
    return isCommand(x) || isKeymap(x) || isNumber(x)
}
/**
 * This one checks whether a value is a string.
 */
function isString(x: any): x is string {
    return x && typeof x === "string"
}
/**
 * This one checks whether a value is a number.
 */
function isNumber(x: any): x is number {
    return x && typeof x === "number"
}
/**
 * This one identifies an object.
 */
function isObject(x: any): boolean {
    return x && typeof x === "object"
}
/**
 * This checks if a value is a command.
 */
function isCommand(x: any): x is Action {
    return isString(x) || isParameterized(x) || isConditional(x) || 
        isCommandSequence(x)
}/**
 * This checks if a value is an array of commands.
 */
function isCommandSequence(x: any): x is Command[] {
    return Array.isArray(x) && x.every(isCommand)
}
/**
 * This recognizes a conditional action.
 */
function isConditional(x: any): x is Conditional {
    return isObject(x) && isString(x.condition) &&
        Object.keys(x).every(key => 
            key === "condition" || isCommand(x[key]))
}
/**
 * This asserts that a value is a parameterized command.
 */
function isParameterized(x: any): x is Parameterized {
    return isObject(x) && isString(x.command) &&
        (!x.args || isObject(x.args) || isString(x.args))
}
/**
 * And finally this one checks if a value is a keymap.
 */
function isKeymap(x: any): x is Keymap {
    return isObject(x) && !isConditional(x) && !isParameterized(x) &&
        Object.values(x).every(isAction)
}
/**
 * ## Executing Commands
 * 
 * In the end all keybindings will invoke one or more VS Code commands. The
 * following function runs a command whose name and arguments are given as
 * parameters.
 */
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
/**
 * `evalString` function evaluates JavaScript expressions. Before doing so, it
 * defines some variables that can be used in the evaluated text.
 */
function evalString(str: string, __selecting: boolean): any {
    let __file = undefined
    let __line = undefined
    let __col = undefined
    let __char = undefined
    let __selection = undefined
    let editor = vscode.window.activeTextEditor
    if (editor) {
        let cursor = editor.selection.active
        __file = editor.document.fileName
        __line = cursor.line
        __col = cursor.character
        __char = editor.document.getText(new vscode.Range(cursor, 
            cursor.translate({ characterDelta: 1 })))
        __selection = editor.document.getText(editor.selection)
    }
    try {
        return eval(`(${str})`)
    }
    catch (error) {
        vscode.window.showErrorMessage("Evaluation error: " + error.message)
    }
}
/**
 * We need the evaluation function when executing conditional command. The
 * condition is evaluated and if a key is found that matches the result, it is
 * executed.
 */
async function executeConditional(cond: Conditional, selecting: boolean): 
    Promise<void> {
    let res = evalString(cond.condition, selecting)
    let branch = isString(res) ? res : JSON.stringify(res)
    if (branch && isAction(cond[branch]))
        await execute(cond[branch], selecting)
}
/**
 * Command arguments can be given as strings which will be evaluated to get
 * the actual arguments. 
 */
async function executeParameterized(action: Parameterized, selecting: boolean) {
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
/**
 * ## Executing Actions
 * 
 * Before running any commands, we need to identify which type of action we got.
 * Depending on the type we use different function to execute the command.
 */
async function execute(action: Action, selecting: boolean): Promise<void> {
    keymap = rootKeymap
    if (isString(action))
        await executeVSCommand(action)
    else if (isCommandSequence(action))
        for (const subAction of action)
            await execute(subAction, selecting)
    else if (isConditional(action))
        await executeConditional(action, selecting)
    else if (isParameterized(action))
        await executeParameterized(action, selecting)
    else if (isKeymap(action))
        keymap = action
}
/**
 * ## Key Press Handler
 * 
 * Now that the plumbing of actions is implemented, it is straightforward to
 * map the pressed key to an action. The special case occurs when a command
 * captures the keyboard. Then we rerun the previous command and give the key 
 * to it as an argument.
 * 
 * Otherwise we just check if the current keymap contains binding for the key
 * pressed, and execute the action. If not, we present an error to the user.
 */
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