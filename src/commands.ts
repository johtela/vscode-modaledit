/**
 * # Commands and State
 *
 * This module implements the new commands provided by ModalEdit. It also stores
 * the extension state; which mode we are in, search parameters, bookmarks,
 * quick snippets, etc.
 */
//#region -c commands.ts imports
import * as vscode from 'vscode'
import * as actions from './actions'
//#endregion
/**
 * ## Command Arguments
 *
 * Most commands provided by ModalEdit take arguments. Since command arguments
 * are stored in objects by-design, we define them as interfaces.
 *
 * ### Search Arguments
 *
 * Search arguments are documented in the
 * [README](../README.html#code-modaledit-search-code).
 */
interface SearchArgs {
    backwards?: boolean
    caseSensitive?: boolean
    acceptAfter?: number
    selectTillMatch?: boolean
    typeAfterAccept?: string
}
/**
 * ### Bookmark Arguments
 *
 * [Bookmark](../README.html#bookmarks) ID is just an index in an array. The
 * actual positions are stored in an object that conforms to the `Bookmark`
 * interface in the `bookmarks` array.
 */
interface BookmarkArgs {
    bookmark?: number
}

interface Bookmark {
    document: vscode.TextDocument
    position: vscode.Position
}
/**
 * ### Quick Snippet Arguments
 *
 * [Quick snippets](../README.html#quick-snippets) are also stored in an array.
 * So their IDs are indexes as well.
 */
interface QuickSnippetArgs {
    snippet: number
}
/**
 * ### Type Normal Keys Arguments
 *
 * The [`typeNormalKeys` command](../README.html#invoking-key-bindings) gets the
 * entered keys as a string.
 */
interface TypeNormalKeysArgs {
    keys: string
}
/**
 * ### Select Between Arguments
 *
 * The `selectBetween` command takes as arguments the strings/regular
 * expressions which delimit the text to be selected. Both of them are optional,
 * but in order for the command to do anything one of them needs to be defined.
 * If the `from` argument is missing, the selection goes from the cursor
 * position forwards to the `to` string. If the `to` is missing the selection
 * goes backwards till the `from` string.
 *
 * If the `regex` flag is on, `from` and `to` strings are treated as regular
 * expressions in the search.
 *
 * The `inclusive` flag tells if the delimiter strings are included in the
 * selection or not. By default the delimiter strings are not part of the
 * selection. Last, the `caseSensitive` flag makes the search case sensitive.
 * When this flag is missing or false the search is case insensitive.
 *
 * By default the search scope is the current line. If you want search inside
 * the whole document, set the `docScope` flag.
 */
interface SelectBetweenArgs {
    from: string
    to: string
    regex: boolean
    inclusive: boolean
    caseSensitive: boolean
    docScope: boolean
}
/**
 * ## State Variables
 *
 * The enabler for modal editing is the `type` event that VS Code provides. It
 * reroutes the user's key presses to our extension. We store the handler to
 * this event in the `typeSubscription` variable.
 */
let typeSubscription: vscode.Disposable | undefined
/**
 * We add an item in the status bar that shows the current mode. The reference
 * to the status bar item is stored below.
 */
let statusBarItem: vscode.StatusBarItem
/**
 * This is the main mode flag that tells if we are in normal mode or insert
 * mode.
 */
let normalMode = true
/**
 * The `selecting` flag indicates if we have initiated selection mode. Note that
 * it is not the only indicator that tells whether a selection is active.
 */
let selecting = false
/**
 * The `searching` flag tells if `modaledit.search` command is in operation.
 */
let searching = false
/**
 * The search parameters are stored below.
 */
let searchString: string
let searchStartPos: vscode.Position[]
let searchBackwards = false
let searchCaseSensitive = false
let searchAcceptAfter = Number.POSITIVE_INFINITY
let searchSelectTillMatch = false
let searchTypeAfterAccept: string | undefined
let searchReturnToNormal = true
/**
 * Bookmarks are stored here.
 */
let bookmarks: Bookmark[] = []
/**
 * Quick snippets are simply stored in an array of strings.
 */
let quickSnippets: string[] = []
/**
 * "Repeat last change" command needs to know when text in editor has changed.
 * It also needs to save the current and last command key sequence, as well as
 * the last sequence that caused text to change.
 */
let textChanged = false
let currentKeySequence: string[] = []
let lastKeySequence: string[] = []
let lastChange: string[] = []
/**
 * ## Command Names
 *
 * Since command names are easy to misspell, we define them as constants.
 */
const toggleId = "modaledit.toggle"
const enterNormalId = "modaledit.enterNormal"
const enterInsertId = "modaledit.enterInsert"
const toggleSelectionId = "modaledit.toggleSelection"
const cancelSelectionId = "modaledit.cancelSelection"
const searchId = "modaledit.search"
const cancelSearchId = "modaledit.cancelSearch"
const deleteCharFromSearchId = "modaledit.deleteCharFromSearch"
const nextMatchId = "modaledit.nextMatch"
const previousMatchId = "modaledit.previousMatch"
const defineBookmarkId = "modaledit.defineBookmark"
const goToBookmarkId = "modaledit.goToBookmark"
const fillSnippetArgsId = "modaledit.fillSnippetArgs"
const defineQuickSnippetId = "modaledit.defineQuickSnippet"
const insertQuickSnippetId = "modaledit.insertQuickSnippet"
const typeNormalKeysId = "modaledit.typeNormalKeys"
const selectBetweenId = "modaledit.selectBetween"
const repeatLastChangeId = "modaledit.repeatLastChange"
/**
 * ## Registering Commands
 *
 * The commands are registered when the extension is activated (main entry point
 * calls this function). We also create the status bar item.
 */
export function register(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand(toggleId, toggle),
        vscode.commands.registerCommand(enterNormalId, enterNormal),
        vscode.commands.registerCommand(enterInsertId, enterInsert),
        vscode.commands.registerCommand(toggleSelectionId, toggleSelection),
        vscode.commands.registerCommand(cancelSelectionId, cancelSelection),
        vscode.commands.registerCommand(searchId, search),
        vscode.commands.registerCommand(cancelSearchId, cancelSearch),
        vscode.commands.registerCommand(deleteCharFromSearchId,
            deleteCharFromSearch),
        vscode.commands.registerCommand(nextMatchId, nextMatch),
        vscode.commands.registerCommand(previousMatchId, previousMatch),
        vscode.commands.registerCommand(defineBookmarkId, defineBookmark),
        vscode.commands.registerCommand(goToBookmarkId, goToBookmark),
        vscode.commands.registerCommand(fillSnippetArgsId, fillSnippetArgs),
        vscode.commands.registerCommand(defineQuickSnippetId, defineQuickSnippet),
        vscode.commands.registerCommand(insertQuickSnippetId, insertQuickSnippet),
        vscode.commands.registerCommand(typeNormalKeysId, typeNormalKeys),
        vscode.commands.registerCommand(selectBetweenId, selectBetween),
        vscode.commands.registerCommand(repeatLastChangeId, repeatLastChange)
    )
    statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left);
    statusBarItem.command = toggleId;
}
/**
 * ## Keyboard Event Handler
 *
 * When the user types in normal mode, `onType` handler gets each typed
 * character one at a time. It calls the `runActionForKey` subroutine to invoke
 * the action bound to the typed key. In addition, it updates the state
 * variables needed by the `repeatLastChange` command and the status bar.
 */
async function onType(event: { text: string }) {
    if (textChanged) {
        lastChange = lastKeySequence
        textChanged = false
    }
    currentKeySequence.push(event.text)
    if (await runActionForKey(event.text)) {
        lastKeySequence = currentKeySequence
        currentKeySequence = []
<<<<<<< HEAD
=======
        for(let label in keySeqRegistry){
            let register = keySeqRegistry[label]
            if (register.recording){
                if(register.skipRecording){
                    register.skipRecording = false;
                    continue;
                }
                if(!register.stopping) register.reqSeq.push(lastKeySequence)
                else{
                    // actions.log("include last? "+register.includeLastCommand)
                    // actions.log("last key: "+lastKeySequence)
                    if(register.includeLastCommand)
                        register.reqSeq.push(lastKeySequence)

                    // actions.log("include first? "+register.includeFirstCommand)

                    if(register.includeFirstCommand){
                        register.seq = register.reqSeq;
                    }else{
                        register.seq = register.reqSeq.slice(1)
                    }
                    register.reqSeq = [];
                    register.recording = false;
                    register.stopping = false;

                    actions.log("key sequence: ")
                    for(let i=0;i<register.seq.length;i++){
                        actions.log("action: "+register.seq[i].join());
                    }
                }
            }
        }
>>>>>>> fixed bug in multi-letter search
    }
    updateStatusBar(vscode.window.activeTextEditor, actions.getHelp())
}
/**
 * Whenever text changes in an active editor, we set a flag. This flag is
 * examined in the `onType` handler above, and the `lastChange` variable is set
 * to indicate that the last command that changed editor text.
 */
export function onTextChanged() {
    textChanged = true
}
/**
 * This helper function just calls the `handleKey` function in the `actions`
 * module. It checks if we have an active selection or search mode on, and
 * passes that information to the function. `handleKey` returns `true` if the
 * key actually invoked a command, or `false` if it was a part of incomplete
 * key sequence that did not (yet) cause any commands to run. This information
 * is needed to decide whether the `lastKeySequence` variable is updated.
 */
async function runActionForKey(key: string): Promise<boolean> {
    return await actions.handleKey(key, isSelecting(), searching)
}
/**
 * ## Mode Switching  Commands
 *
 * `toggle` switches between normal and insert mode.
 */
export function toggle() {
    if (normalMode)
        enterInsert()
    else
        enterNormal()
}
/**
 * When entering normal mode, we:
 *
 * 1. cancel the search, if it is on,
 * 2. subscribe to the `type` event,
 * 3. handle the rest of the mode setup with `setNormalMode` function, and
 * 4. clear the selection.
 */
export function enterNormal() {
    cancelSearch()
    if (!typeSubscription)
        typeSubscription = vscode.commands.registerCommand("type", onType)
    setNormalMode(true)
    cancelSelection()
}
/**
 * Conversely, when entering insert mode, we:
 *
 * 1. cancel the search, if it is on (yes, you can use it in insert mode, too),
 * 2. unsubscribe to the `type` event,
 * 3. handle the rest of the mode setup with `setNormalMode` function.
 *
 * Note that we specifically don't clear the selection. This allows the user
 * to easily surround selected text with hyphens `'`, parenthesis `(` and `)`,
 * brackets `[` and `]`, etc.
 */
export function enterInsert() {
    cancelSearch()
    if (typeSubscription) {
        typeSubscription.dispose()
        typeSubscription = undefined
    }
    setNormalMode(false)
}
/**
 * The rest of the state handling is delegated to subroutines that do specific
 * things. `setNormalMode` sets or resets the VS Code `modaledit.normal` context.
 * This can be used in "standard" key bindings. Then it sets the `normalMode`
 * variable and calls the next subroutine which updates cursor and status bar.
 */
async function setNormalMode(value: boolean): Promise<void> {
    const editor = vscode.window.activeTextEditor
    if (editor) {
        await vscode.commands.executeCommand("setContext", "modaledit.normal",
            value)
        normalMode = value
        updateCursorAndStatusBar(editor)
    }
}
/**
 * This function updates the cursor shape according to the mode. It delegates
 * updating of the status bar to the next subroutine.
 */
export function updateCursorAndStatusBar(editor: vscode.TextEditor | undefined) {
    if (editor)
        editor.options.cursorStyle =
            searching ? actions.getSearchCursorType() :
                normalMode ? actions.getNormalCursorStyle() :
                    actions.getInsertCursorStyle()
    updateStatusBar(editor)
}
/**
 * The last function updates the status bar text according to the mode. It also
 * indicates if selection is active or if search mode on. If so, it shows the
 * search parameters. If no editor is active, we hide the status bar item.
 */
export function updateStatusBar(editor: vscode.TextEditor | undefined,
    help?: string) {
    if (editor) {
        let text: string
        if (searching)
            text = `SEARCH [${searchBackwards ? "B" : "F"
                }${searchCaseSensitive ? "S" : ""}]: ${searchString}`
        else {
            let sel = isSelecting() ? " [S]" : ""
            text = normalMode ? `--NORMAL${sel}--` : `--INSERT${sel}--`
        }
        if (help)
            text = `${text}  ${help}`
        statusBarItem.text = text
        statusBarItem.show()
    }
    else
        statusBarItem.hide()
}
/**
 * ## Selection Commands
 *
 * `modaledit.cancelSelection` command clears the selection using ths standard
 * `cancelSelection` command, but also sets the `selecting` flag to false, and
 * updates the status bar. It is advisable to use this command instead of the
 * standard version to keep the state in sync.
 */
async function cancelSelection(): Promise<void> {
    await vscode.commands.executeCommand("cancelSelection")
    selecting = false
    updateStatusBar(vscode.window.activeTextEditor)
}
/**
 * `modaledit.toggleSelection` toggles the selection mode on and off. It sets
 * the selection mode flag and updates the status bar, but also clears the
 * selection.
 */
async function toggleSelection(): Promise<void> {
    let oldSelecting = isSelecting()
    await vscode.commands.executeCommand("cancelSelection")
    selecting = !oldSelecting
    updateStatusBar(vscode.window.activeTextEditor)
}
/**
 * The following helper function actually determines, if a selection is active.
 * It checks not only the `selecting` flag but also if there is any text
 * selected in the active editor.
 */
function isSelecting(): boolean {
    return selecting ||
        vscode.window.activeTextEditor!.selections.some(
            selection => !selection.anchor.isEqual(selection.active))
}
/**
 * ## Search Commands
 *
 * Incremental search is by far the most complicated part of this extension.
 * Searching overrides both normal and insert modes, and captures the keyboard
 * until it is done. The following subroutine sets the associated state
 * variable, the VS Code `modaledit.searching` context, and the status bar.
 * Since search mode also puts the editor implicitly in the normal mode, we
 * need to check what was the state when we initiated the search. If we were in
 * insert mode, we return also there.
 */
async function setSearching(value: boolean) {
    searching = value
    await vscode.commands.executeCommand("setContext",
        "modaledit.searching", value)
    updateCursorAndStatusBar(vscode.window.activeTextEditor)
    if (!(value || searchReturnToNormal))
        enterInsert()
}
/**
 * This helper function changes the selection range in the active editor. It
 * also makes sure that the selection is visible.
 */
function changeSelection(sel: vscode.Selection, editor: vscode.TextEditor,
    anchor: vscode.Position, active: vscode.Position) {
    editor.selection = new vscode.Selection(anchor, active)
    editor.revealRange(editor.selection)
}
/**
 * This is the main command that not only initiates the search, but also handles
 * the key presses when search is active. That is why its argument is defined
 * as an union type. We also use the argument to detect whether we are starting
 * a new search or adding characters to the active search.
 */
async function search(args: SearchArgs | string): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (!editor)
        return
    if (!args)
        args = {}
    if (typeof args == 'object') {
        /**
         * If we get an object as argument, we start a new search. We switch
         * to normal mode, if necessary.
         */
        searchReturnToNormal = normalMode
        actions.setLastCommand(searchId)
        if (!normalMode)
            enterNormal()
        setSearching(true)
        searchString = ""
        searchStartPos = editor.selections.map(x => x.active)
        searchBackwards = args.backwards || false
        searchCaseSensitive = args.caseSensitive || false
        searchAcceptAfter = args.acceptAfter || Number.POSITIVE_INFINITY
        searchSelectTillMatch = args.selectTillMatch || false
        searchTypeAfterAccept = args.typeAfterAccept
    }
    else if (args == "\n")
        /**
         * If we get an enter character we accept the search.
         */
        await acceptSearch()
    else {
        /**
         * Otherwise we just add the character to the search string and find
         * the next match. If `acceptAfter` argument is given, and we have a
         * sufficiently long search string, we accept the search automatically.
         */
        highlightNextMatch(editor, editor.selections.map(x => x.anchor), searchString + args)
        if (searchString.length >= searchAcceptAfter)
            await acceptSearch()
    }
}
/**
 * The actual search functionality is located in this helper function. It gets
 * the start position for the search, the search string, and an optional delta
 * parameter that increments or decrements the start position.
 */
function highlightNextMatch(editor: vscode.TextEditor, startPos: vscode.Position[],
    newSearchString: string, delta: number = 0) {
    if (newSearchString == "") {
        /**
         * If search string is empty, we return to the start position.
         */
        editor.selections = editor.selections.map((sel, i) =>
            new vscode.Selection(searchStartPos[i],searchStartPos[i]))
        editor.revealRange(editor.selection)
        searchString = newSearchString
    }
    else {
        editor.selections = editor.selections.map((sel, i) => {
            /**
             * Otherwise we first map the cursor position to the starting offset
             * from the begining of the file. We add the delta argument to the
             * offset.
             */
            let doc = editor.document
            let startOffs = doc.offsetAt(startPos[i]) + delta
            /**
             * Then we get the text of the active editor as string. If we have
             * case-insensitive search, we transform the text to lower case.
             */
            let docText = searchCaseSensitive ?
                doc.getText() : doc.getText().toLowerCase()
            /**
             * Next we determine the search target. It is also transformed to lower
             * case, if search is case-insensitive.
             */
            let target = searchCaseSensitive ?
                newSearchString : newSearchString.toLowerCase()
            /**
             * This is the actual search. Depending on the search direction we
             * find either the first or the last match from the start offset.
             */
            let offs = searchBackwards ?
                docText.lastIndexOf(target, startOffs) :
                docText.indexOf(target, startOffs)
            if (offs >= 0) {
                /**
                 * If search was successful, we store the new search string and
                 * change the selection to highlight it. If `selectTillMatch`
                 * parameter is set, we highlight the range from the search start
                 * position to the beginning or end of the match depending on if
                 * the match is before or after the starting position.
                 */
                searchString = newSearchString
                let newPos = doc.positionAt(offs)
                let start = searchSelectTillMatch ? searchStartPos[i] : newPos
                let newSel = new vscode.Selection(start,
                    newPos.with(undefined, newPos.character +
                        (newPos.isBefore(start) ? 0 : searchString.length)))
                return newSel
            }else{
                return sel
            }
        })
        editor.revealRange(editor.selection)
    }
}
/**
 * ### Accepting Search
 *
 * Accepting the search resets the mode variables. Additionally, if
 * `typeAfterAccept` argument is set we run the given normal mode commands.
 */
async function acceptSearch() {
    await setSearching(false)
    await typeAfterMatch()
}

async function typeAfterMatch() {
    if (searchTypeAfterAccept)
        await typeNormalKeys({ keys: searchTypeAfterAccept })
}
/**
 * ### Canceling Search
 *
 * Canceling search just resets state, and moves the cursor back to the starting
 * position.
 */
async function cancelSearch(): Promise<void> {
    if (searching) {
        await setSearching(false)
        let editor = vscode.window.activeTextEditor
        if (editor){
            editor.selections = editor.selections.map((sel,i) => {
                let newSel =
                    new vscode.Selection(searchStartPos[i],searchStartPos[i])
                return newSel
            })
            editor.revealRange(editor.selection)
        }
    }
}
/**
 * ### Modifying Search String
 *
 * Since we cannot capture the backspace character in normal mode, we have to
 * hook it another way. We define a command `modaledit.deleteCharFromSearch`
 * which deletes the last character from the search string. This command can
 * then be bound to backspace using the standard keybindings. We only run the
 * command, if the `modaledit.searching` context is set. Below is an excerpt
 * of the default keybindings defined in `package.json`.
 * ```js
 * {
 *    "key": "Backspace",
 *    "command": "modaledit.deleteCharFromSearch",
 *    "when": "editorTextFocus && modaledit.searching"
 * }
 * ```
 */
function deleteCharFromSearch() {
    let editor = vscode.window.activeTextEditor
    if (editor && searching && searchString.length > 0)
        highlightNextMatch(editor, searchStartPos,
            searchString.slice(0, searchString.length - 1))
}
/**
 * ### Finding Previous and Next Match
 *
 * Given all the code we already have for searching, finding next and previous
 * match is a relatively simple task. We basically just calculate the new
 * starting position and restart the search. The selection is what determines
 * where the search starts, but we need to adjust the starting position slightly
 * depending on the search direction and other parameters.
 */
async function nextMatch(): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor && searchString) {
        let s = editor.selections
        if (searchBackwards)
            highlightNextMatch(editor, s.map(x => x.active), searchString,
                (searchSelectTillMatch && s[0].active.isBefore(searchStartPos[0])) ||
                    s[0].isEmpty ? -1 :
                    -searchString.length - 1)
        else
            highlightNextMatch(editor, s.map(x => x.active), searchString,
                searchSelectTillMatch && s[0].active.isBefore(searchStartPos[0]) ?
                    searchString.length :
                    s[0].isEmpty ? 1 : 0)
        await typeAfterMatch()
    }
}
/**
 * Finding the previous match piggybacks on the above function. It just
 * inverts the search direction first.
 */
async function previousMatch(): Promise<void> {
    searchBackwards = !searchBackwards
    await nextMatch()
    searchBackwards = !searchBackwards
}
/**
 * ## Bookmarks
 *
 * Defining a bookmark is simple. We just store the cursor location and file in
 * a `Bookmark` object, and store it in the `bookmarks` array.
 */
function defineBookmark(args?: BookmarkArgs) {
    let editor = vscode.window.activeTextEditor
    if (editor) {
        let document = editor.document
        let position = editor.selection.active
        bookmarks[args?.bookmark || 0] = { document, position }
    }
}
/**
 * Jumping to bookmark is also easy, just call the `changeSelection` function
 * we already defined. It makes sure that selection is visible.
 */
async function goToBookmark(args?: BookmarkArgs): Promise<void> {
    let i = args?.bookmark || 0
    let bm = bookmarks[i]
    if (bm) {
        await vscode.window.showTextDocument(bm.document)
        let editor = vscode.window.activeTextEditor
        if (editor){
            editor.selection = new vscode.Selection(bm.position, bm.position)
            editor.revealRange(editor.selection)
        }
    }
}
/**
 * ## Quick Snippets
 *
 * Supporting quick snippets is also a pleasantly simple job. First we implement
 * the `modaledit.fillSnippetArgs` command, which replaces (multi-)selection
 * ranges with `$1`, `$2`, ...
 */
async function fillSnippetArgs(): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor) {
        let sel = editor.selections
        await editor.edit(eb => {
            for (let i = 0; i < sel.length; i++)
                eb.replace(sel[i], "$" + (i + 1))
        })
    }
}
/**
 * Defining a snippet just puts the selection into an array.
 */
function defineQuickSnippet(args?: QuickSnippetArgs) {
    let editor = vscode.window.activeTextEditor
    if (editor)
        quickSnippets[args?.snippet || 0] =
            editor.document.getText(editor.selection)
}
/**
 * Inserting a snippet is done as easily with the built-in command. We enter
 * insert mode automatically before snippet is expanded.
 */
async function insertQuickSnippet(args?: QuickSnippetArgs): Promise<void> {
    let i = args?.snippet || 0
    let snippet = quickSnippets[i]
    if (snippet) {
        enterInsert()
        await vscode.commands.executeCommand("editor.action.insertSnippet",
            { snippet })
    }
}
/**
 * ## Invoking Commands via Key Bindings
 *
 * The last command runs normal mode commands throught their key bindings.
 * Implementing that is as easy as calling the keyboard handler.
 */
async function typeNormalKeys(args: TypeNormalKeysArgs): Promise<void> {
    if (typeof args !== 'object' || typeof (args.keys) !== 'string')
        throw Error(`${typeNormalKeysId}: Invalid args: ${JSON.stringify(args)}`)
    for (let i = 0; i < args.keys.length; i++)
        await runActionForKey(args.keys[i])
}
/**
 * ## Advanced Selection Command
 *
 * For selecting ranges of text between two characters (inside parenthesis, for
 * ecample) we add the `modaledit.selectBetween` command.
 */
function selectBetween(args: SelectBetweenArgs) {
    let editor = vscode.window.activeTextEditor
    if (!editor)
        return
    if (typeof args !== 'object')
        throw Error(`${selectBetweenId}: Invalid args: ${JSON.stringify(args)}`)
    let doc = editor.document
    let cursorPos = editor.selection.active
    let startPos = new vscode.Position(args.docScope ? 0 : cursorPos.line, 0)
    let endPos = doc.lineAt(args.docScope ? doc.lineCount - 1 : cursorPos.line)
        .range.end
    let cursorOffs = doc.offsetAt(cursorPos)
    let startOffs = doc.offsetAt(startPos)
    let endOffs = doc.offsetAt(endPos)
    let fromOffs = cursorOffs
    let toOffs = cursorOffs
    if (args.regex) {
        if (args.from) {
            fromOffs = startOffs
            let text = doc.getText(new vscode.Range(startPos, cursorPos))
            let re = new RegExp(args.from, args.caseSensitive ? "g" : "gi")
            let match: RegExpExecArray | null = null
            while ((match = re.exec(text)) != null) {
                fromOffs = startOffs + match.index +
                    (args.inclusive ? 0 : match[0].length)
            }
        }
        if (args.to) {
            toOffs = endOffs
            let text = doc.getText(new vscode.Range(cursorPos, endPos))
            let re = new RegExp(args.to, args.caseSensitive ? undefined : "i")
            let match = re.exec(text)
            if (match)
                toOffs = cursorOffs + match.index +
                    (args.inclusive ? match[0].length : 0)
        }
    }
    else {
        let text = doc.getText(new vscode.Range(startPos, endPos))
        if (!args.caseSensitive)
            text = text.toLowerCase()
        if (args.from) {
            fromOffs = text.lastIndexOf(args.caseSensitive ?
                args.from : args.from.toLowerCase(), cursorOffs - startOffs)
            fromOffs = fromOffs < 0 ? startOffs :
                startOffs + fromOffs + (args.inclusive ? 0 : args.from.length)
        }
        if (args.to) {
            toOffs = text.indexOf(args.caseSensitive ?
                args.to : args.to.toLowerCase(), cursorOffs - startOffs)
            toOffs = toOffs < 0 ? endOffs :
                startOffs + toOffs + (args.inclusive ? args.to.length : 0)
        }
    }
    editor.selection = new vscode.Selection(
        doc.positionAt(fromOffs), doc.positionAt(toOffs))
    editor.revealRange(editor.selection)
}
/**
 * ## Repeat Last Change Command
 *
 * The `repeatLastChange` command runs the key sequence stored in `lastChange`
 * variable. Since the command inevitably causes text in the editor to change
 * (which causes the `textChanged` flag to go high), it has to reset the current
 * key sequence to prevent the `lastChange` variable from being overwritten next
 * time the user presses a key.
 */
async function repeatLastChange(): Promise<void> {
    for (let i = 0; i < lastChange.length; i++)
        await runActionForKey(lastChange[i])
    currentKeySequence = lastChange
}