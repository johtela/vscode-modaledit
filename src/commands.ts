/**
 * # Commands and State
 * 
 * This module implements the new commands provided by ModalEdit. It also stores
 * the extension state; which mode we are in, search parameters, bookmarks,
 * quick snippets, etc.
 */
import * as vscode from 'vscode'
import * as actions from './actions'
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
let searchStartPos: vscode.Position
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
        vscode.commands.registerCommand(typeNormalKeysId, typeNormalKeys)
    )
    statusBarItem = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left);
    statusBarItem.command = toggleId;
}
/**
 * ## Keyboard Event Handler
 * 
 * When the user types in normal mode, `onType` handler gets each typed 
 * character one at a time. It delegates the command invocation to the 
 * `handleKey` function in the `actions` module. It passes the information about 
 * if we have an active selection, or if search mode is on (we use the key 
 * capture then). 
 */
async function onType(event: { text: string }): Promise<void> {
    await actions.handleKey(event.text, isSelecting(), searching)
    updateStatusBar(vscode.window.activeTextEditor, actions.getHelp())
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
function changeSelection(editor: vscode.TextEditor, anchor: vscode.Position,
    active: vscode.Position) {
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
        searchStartPos = editor.selection.active
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
        highlightNextMatch(editor, editor.selection.anchor, searchString + args)
        if (searchString.length >= searchAcceptAfter)
            await acceptSearch()
    }
}
/**
 * The actual search functionality is located in this helper function. It gets
 * the start position for the search, the search string, and an optional delta
 * parameter that increments or decrements the start position.
 */
function highlightNextMatch(editor: vscode.TextEditor, startPos: vscode.Position,
    newSearchString: string, delta: number = 0) {
    if (newSearchString == "") {
        /**
         * If search string is empty, we return to the start position.
         */
        changeSelection(editor, searchStartPos, searchStartPos)
        searchString = newSearchString
    }
    else {
        /**
         * Otherwise we first map the cursor position to the starting offset 
         * from the begining of the file. We add the delta argument to the 
         * offset.
         */
        let doc = editor.document
        let startOffs = doc.offsetAt(startPos) + delta
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
            let start = searchSelectTillMatch ? searchStartPos : newPos
            changeSelection(editor, start,
                newPos.with(undefined, newPos.character + 
                    (newPos.isBefore(start) ? 0 : searchString.length)))
        }
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
        if (editor)
            changeSelection(editor, searchStartPos, searchStartPos)
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
async function deleteCharFromSearch(): Promise<void> {
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
        let s = editor.selection
        if (searchBackwards)
            highlightNextMatch(editor, s.active, searchString,
                (searchSelectTillMatch && s.active.isBefore(searchStartPos)) ||
                    s.isEmpty ? -1 : 
                    -searchString.length - 1)
        else
            highlightNextMatch(editor, s.active, searchString,
                searchSelectTillMatch && s.active.isBefore(searchStartPos) ?
                    searchString.length : 
                    s.isEmpty ? 1 : 0)
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
async function defineBookmark(args?: BookmarkArgs): Promise<void> {
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
        if (editor)
            changeSelection(editor, bm.position, bm.position)
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
async function defineQuickSnippet(args?: QuickSnippetArgs): Promise<void> {
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
    if (typeof args !== 'object' || typeof(args.keys) !== 'string')
        throw Error(`${typeNormalKeysId}: Invalid args: ${JSON.stringify(args)}`) 
    for (let i = 0; i < args.keys.length; i++)
        await onType({ text: args.keys[i] })
}