/**
 * # Converting Keybinding Definitions to Actions
 *
 * This module defines the schema of the configuration file using TypeScript
 * interfaces. We parse the configuration JSON to TypeScript objects which
 * directly define all the valid keyboard sequences and the commands that these
 * will invoke.
 */
//#region -c action.ts imports
import * as vscode from 'vscode'
//#endregion
/**
 * ## Action Definitions
 *
 * The keybinding configuration consist of _actions_ that can take three forms:
 * an action can be a command (defined later), a keymap, or a number that refers
 * to a keymap defined earlier.
 */
export type Action = Command | Keymap | number
/**
 * Commands can be invoked in four ways: by specifying just command a name
 * (string), or using a conditional command, a command with parameters, or a
 * sequence (array) of commands. The definition is recursive, meaning that a
 * sequence can contain all four types of commands.
 */
export type Command = string | Conditional | Parameterized | Command[]
/**
 * A conditional command consist of condition (a JavaScript expression) and set
 * of branches to take depending on the result of the condition. Each branch can
 * be any type of command defined above.
 */
export interface Conditional {
    condition: string
    [branch: string]: Command
}
/**
 * A command that takes arguments can be specified using the `Parameterized`
 * interface. Arguments can be given either as an object or a string, which
 * is assumed to contain a valid JS expression. Additionally, you can specify
 * that the command is run multiple times by setting the `repeat` property. The
 * property must be either a number, or a JS expression that evaluates to a
 * number. If it evaluates to some other type, the expression is used as a
 * condition that is evaluated after the command is run. If the expression
 * returns a truthy value, the command is repeated.
 */
export interface Parameterized {
    command: string
    args?: {} | string
    repeat?: number | string
}
/**
 * A keymap is a dictionary of keys (characters) to actions. Keys are either
 * single characters or character ranges, denoted by sequences of `<char>,<char>`
 * and `<char>-<char>`. Values of the dictionary can be also nested keymaps.
 * This is how you can define commands that require  multiple keypresses.
 *
 * ![keymap example](../images/keymap.png)
 * When the value of a key is number, it refers to another keymap whose `id`
 * equals the number. The number can also point to the same  keymap where it
 * resides. With this mechanism, you can define _recursive_ keymaps that can
 * take (theoretically) infinitely long key sequences. The picture on the right
 * illustrates this.
 *
 * The `help` field contains help text that is shown in the status bar when the
 * keymap is active.
 */
export interface Keymap {
    id: number
    help: string
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
 * purposes and to make it available to command arguments.
 */
let keySequence: string[] = []
/**
 * We need a dictionary that returns a keymap for given id.
 */
let keymapsById: { [id: number]: Keymap }
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
/**
 * ## Logging
 *
 * To enable logging and error reporting ModalEdit creates an output channel
 * that is visible in the output pane. The channel is created in the extension
 * activation hook, but it is passed to this module using the `setOutputChannel`
 * function.
 */
let outputChannel: vscode.OutputChannel

export function setOutputChannel(channel: vscode.OutputChannel) {
    outputChannel = channel
}
/**
 * Once the channel is set, we can output messages to it using the `log`
 * function.
 */
export function log(message: string) {
    outputChannel.appendLine(message)
}
/**
 * ## Updating Configuration from settings.json
 *
 * Whenever you save the user-level `settings.json` or the one located in the
 * `.vsode` directory VS Code calls this function that updates the current
 * configuration.
 */
export function updateFromConfig(): void {
    const config = vscode.workspace.getConfiguration("modaledit")
    const keybindings = config.get<object>("keybindings")
    log("Validating keybindings in 'settings.json'...")
    if (isKeymap(keybindings)) {
        rootKeymap = keybindings
        keymap = rootKeymap
        keymapsById = {}
        errors = 0
        validateAndResolveKeymaps(keymap)
        if (errors > 0)
            log(`Found ${errors} error${errors > 1 ? "s" : ""}. ` +
                "Keybindings might not work correctly.")
        else
            log("Validation completed successfully.")
    }
    else if (keybindings)
        log("ERROR: Invalid configuration structure. Keybindings not updated.")
    insertCursorStyle = toVSCursorStyle(
        config.get<Cursor>("insertCursorStyle", "line"))
    normalCursorStyle = toVSCursorStyle(
        config.get<Cursor>("normalCursorStyle", "block"))
    searchCursorStyle = toVSCursorStyle(
        config.get<Cursor>("searchCursorStyle", "underline"))
    startInNormalMode = config.get<boolean>("startInNormalMode", true)
}
/**
 * To make sure that the keybinding section is valid, we define a function that
 * checks it. At the same time the function resolves all the keymaps that are
 * referred by an id. It records the number of errors.
 */
let errors: number
/**
 * The keymap ranges are recognized with the following regular expression.
 * Examples of valid key sequences include:
 *
 * - `0-9`
 * - `a,b,c`
 * - `d,e-h,l`
 *
 * Basically you can add individual characters to the range with a comma `,` and
 * an ASCII range with dash `-`. The ASCII code of the first character must be
 * smaller than the second one's.
 */
let keyRE = /^.([\-,].)+$/
/**
 * The function itself is recursive; it calls itself, if it finds a nested
 * keymap. It stores all the keymaps it encounters in the `keymapsById`
 * dictionary.
 */
function validateAndResolveKeymaps(keybindings: Keymap) {
    function error(message: string) {
        log("ERROR: " + message)
        errors++
    }
    if (typeof keybindings.id === 'number')
        keymapsById[keybindings.id] = keybindings
    for (let key in keybindings) {
        if (keybindings.hasOwnProperty(key) && key != "id" && key != "help") {
            let target = keybindings[key]
            if (isKeymap(target))
                validateAndResolveKeymaps(target)
            else if (typeof target === 'number') {
                let id = target
                target = keymapsById[id]
                if (!target)
                    error(`Undefined keymap id: ${id}`)
                else
                    keybindings[key] = target
            }
            if (key.match(keyRE))
                for (let i = 1; i < key.length; i += 2) {
                    if (key[i] == '-') {
                        let first = key.charCodeAt(i - 1)
                        let last = key.charCodeAt(i + 1)
                        if (first > last)
                            error(`Invalid key range: "${key}"`)
                        else
                            for (let i = first; i <= last; i++)
                                keybindings[String.fromCharCode(i)] = target
                    }
                    else {
                        keybindings[key[i - 1]] = target
                        keybindings[key[i + 1]] = target
                    }
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
}
/**
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
        (!x.args || isObject(x.args) || isString(x.args)) &&
        (!x.repeat || isNumber(x.repeat) || isString(x.repeat))
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
 * parameters. If the command throws an exception because of invalid arguments,
 * for example, the error is shown in the popup window at the corner of the
 * screen.
 */
async function executeVSCommand(command: string, ...rest: any[]): Promise<void> {
    try {
        await vscode.commands.executeCommand(command, ...rest)
        lastCommand = command
    }
    catch (error) {
        vscode.window.showErrorMessage(error.message)
    }
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
    let __keySequence = keySequence
    let __keys = keySequence
    let __rkeys = keySequence.slice().reverse()
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
 * Parameterized commands can get their arguments in two forms: as a string
 * that is evaluated to get the actual arguments, or as an object. Before
 * executing the command, we inspect the `repeat` property. If it is string
 * we evaluate it, and check if the result is a number. If so, we update the
 * `repeat` variable that designates repetition count. If not, we treate it as
 * a continue condition. The subroutine `exec` runs the command either `repeat`
 * times or as long as the expression in the `repeat` property returns a truthy
 * value.
 */
async function executeParameterized(action: Parameterized, selecting: boolean) {
    let repeat: string | number = 1
    async function exec(args?: any) {
        let cont = true
        if (isString(repeat))
            do {
                await executeVSCommand(action.command, args)
                cont = evalString(repeat, selecting)
            }
            while (cont)
        else
            for (let i = 0; i < repeat; i++)
                await executeVSCommand(action.command, args)
    }
    if (action.repeat) {
        if (isString(action.repeat)) {
            let val = evalString(action.repeat, selecting)
            if (typeof val === 'number')
                repeat = Math.max(1, val)
            else
                repeat = action.repeat
        }
        else
            repeat = Math.max(1, action.repeat)
    }
    if (action.args) {
        if (typeof action.args === 'string')
            await exec(evalString(action.args, selecting))
        else
            await exec(action.args)
    }
    else
        await exec()
}
/**
 * ## Executing Actions
 *
 * Before running any commands, we need to identify which type of action we got.
 * Depending on the type we use different function to execute the command. If
 * the action is not a command, it has to be a keymap. Since we resolved `id`
 * referenences in `validateAndResolveKeymaps`, an action has to be a keymap
 * object at this point. We set the new keymap as the active one.
 */
async function execute(action: Action, selecting: boolean): Promise<void> {
    keymap = rootKeymap
    if (isString(action))
        await executeVSCommand(action)
    else if (isCommandSequence(action))
        for (const command of action)
            await execute(command, selecting)
    else if (isConditional(action))
        await executeConditional(action, selecting)
    else if (isParameterized(action))
        await executeParameterized(action, selecting)
    else
        keymap = <Keymap>action
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
 *
 * As a last step the function returns `true`, if the handled key caused the
 * `keySequence` to be cleared. This indicates that the key invoked a command
 * instead of just changing the active keymap.
 */
export async function handleKey(key: string, selecting: boolean,
    capture: boolean): Promise<boolean> {
    keySequence.push(key)
    if (capture && lastCommand)
        executeVSCommand(lastCommand, key)
    else if (keymap && keymap[key]) {
        await execute(keymap[key], selecting)
        if (keymap == rootKeymap)
            keySequence = []
    }
    else {
        vscode.window.showWarningMessage("ModalEdit: Undefined key binding: " +
            keySequence.join(" - "))
        keySequence = []
        keymap = rootKeymap
    }
    return (keySequence.length == 0)
}
/**
 * ## Keymap Help
 *
 * When defining complex key sequences you can help the user by defining what
 * keys she can press next and what they do. If the help is defined, it is shown
 * in the status bar.
 */
export function getHelp(): string | undefined {
    return keymap.help
}
