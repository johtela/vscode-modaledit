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
import { TextDecoder } from 'util'
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
    wrapAround?: boolean
    acceptAfter?: number
    selectTillMatch?: boolean
    typeAfterAccept?: string
    typeBeforeNextMatch?: string
    typeAfterNextMatch?: string
    typeBeforePreviousMatch?: string
    typeAfterPreviousMatch?: string
}
/**
 * ### Bookmark Arguments
 * 
 * [Bookmark](../README.html#bookmarks) ID is a user specified string label. 
 * Actual positions are stored in an object that conforms to the `Bookmark` 
 * interface in the `bookmarks` dictionary.
 */
interface BookmarkArgs {
    bookmark?: string,
    select?: boolean
}

class Bookmark implements vscode.QuickPickItem {
    public description: string

    constructor(
        public label: string,
        public document: vscode.TextDocument,
        public position: vscode.Position) {
        let ln = position.line
        let col = position.character
        let text = document.lineAt(ln).text
        this.description = `Ln ${ln}, Col ${col}: ${text}`
    }
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
 * We add two items in the status bar that show the current mode. The main 
 * status bar shows the current state we are in. The secondary status bar shows 
 * additional info such as keys that have been pressed so far and any help 
 * strings defined in key bindings.  
 */
let mainStatusBar: vscode.StatusBarItem
let secondaryStatusBar: vscode.StatusBarItem
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
 * Search state variables.
 */
let searchString: string
let searchStartSelections: vscode.Selection[]
let searchInfo: string | null = null
/**
 * Current search parameters. 
 */
let searchBackwards = false
let searchCaseSensitive = false
let searchWrapAround = false
let searchAcceptAfter = Number.POSITIVE_INFINITY
let searchSelectTillMatch = false
let searchTypeAfterAccept: string | undefined
let searchTypeBeforeNextMatch: string | undefined
let searchTypeAfterNextMatch: string | undefined
let searchTypeBeforePreviousMatch: string | undefined
let searchTypeAfterPreviousMatch: string | undefined
let searchReturnToNormal = true
/**
 * Bookmarks are stored here.
 */
let bookmarks: { [label: string]: Bookmark } = {}
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
const resetSelectionId = "modaledit.resetSelection"
const searchId = "modaledit.search"
const cancelSearchId = "modaledit.cancelSearch"
const deleteCharFromSearchId = "modaledit.deleteCharFromSearch"
const nextMatchId = "modaledit.nextMatch"
const previousMatchId = "modaledit.previousMatch"
const defineBookmarkId = "modaledit.defineBookmark"
const goToBookmarkId = "modaledit.goToBookmark"
const showBookmarksId = "modaledit.showBookmarks"
const fillSnippetArgsId = "modaledit.fillSnippetArgs"
const defineQuickSnippetId = "modaledit.defineQuickSnippet"
const insertQuickSnippetId = "modaledit.insertQuickSnippet"
const typeNormalKeysId = "modaledit.typeNormalKeys"
const selectBetweenId = "modaledit.selectBetween"
const repeatLastChangeId = "modaledit.repeatLastChange"
const importPresetsId = "modaledit.importPresets"
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
        vscode.commands.registerCommand(resetSelectionId, resetSelection),
        vscode.commands.registerCommand(searchId, search),
        vscode.commands.registerCommand(cancelSearchId, cancelSearch),
        vscode.commands.registerCommand(deleteCharFromSearchId,
            deleteCharFromSearch),
        vscode.commands.registerCommand(nextMatchId, nextMatch),
        vscode.commands.registerCommand(previousMatchId, previousMatch),
        vscode.commands.registerCommand(defineBookmarkId, defineBookmark),
        vscode.commands.registerCommand(goToBookmarkId, goToBookmark),
        vscode.commands.registerCommand(showBookmarksId, showBookmarks),
        vscode.commands.registerCommand(fillSnippetArgsId, fillSnippetArgs),
        vscode.commands.registerCommand(defineQuickSnippetId, defineQuickSnippet),
        vscode.commands.registerCommand(insertQuickSnippetId, insertQuickSnippet),
        vscode.commands.registerCommand(typeNormalKeysId, typeNormalKeys),
        vscode.commands.registerCommand(selectBetweenId, selectBetween),
        vscode.commands.registerCommand(repeatLastChangeId, repeatLastChange),
        vscode.commands.registerCommand(importPresetsId, importPresets)
    )
    mainStatusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left)
    mainStatusBar.command = toggleId
    secondaryStatusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Left)
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
    }
    updateCursorAndStatusBar(vscode.window.activeTextEditor, actions.getHelp())
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
 * This function updates the cursor shape and status bar according to editor
 * state. It indicates when selection is active or search mode is on. If 
 * so, it shows the search parameters. If no editor is active, we hide the 
 * status bar items.
 */
export function updateCursorAndStatusBar(editor: vscode.TextEditor | undefined,
    help?: string) {
    if (editor) {
        // Get the style parameters
        let [style, text, color] =
            searching ? actions.getSearchStyles() :
                isSelecting() && normalMode ? actions.getSelectStyles() :
                    normalMode ? actions.getNormalStyles() :
                        actions.getInsertStyles()

        /**
         * Update the cursor style.
         */
        editor.options.cursorStyle = style
        /**
         * Update the main status bar.
         */
        mainStatusBar.text = searching ?
            `${text} [${searchBackwards ? "B" : "F"
            }${searchCaseSensitive ? "S" : ""}]: ${searchString}` :
            text
        mainStatusBar.color = color
        mainStatusBar.show()
        /**
         * Update secondary status bar. If there is any keys pressed in the
         * current sequence, we show them. Also possible help string is shown.
         * The info given by search command is shown only as long there are
         * no other messages to show.
         */
        let sec = "    " + currentKeySequence.join("")
        if (help)
            sec = `${sec}    ${help}`
        if (searchInfo) {
            if (sec.trim() == "")
                sec = searchInfo
            else
                searchInfo = null
        }
        secondaryStatusBar.text = sec
        secondaryStatusBar.show()
    }
    else {
        mainStatusBar.hide()
        secondaryStatusBar.hide()
    }
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
    if (selecting) {
        await vscode.commands.executeCommand("cancelSelection")
        selecting = false
        updateCursorAndStatusBar(vscode.window.activeTextEditor)
    }
}

/**
 * `modaledit.resetSelection`, like `modaledit.cancelSelect` sets selecting to
 * false sets the anchor === active selection position. Unlike
 * `modaledit.cancelSelect` it does not clear multiple selections
 */
function resetSelection() {
    let editor = vscode.window.activeTextEditor
    if(editor){
        editor.selections = editor.selections.map((sel: vscode.Selection) => {
            return new vscode.Selection(sel.active,sel.active);
        })
    }
    selecting = false
    updateStatusBar(vscode.window.activeTextEditor)
}

/**
 * `modaledit.toggleSelection` toggles the selection mode on and off. It sets
 * the selection mode flag and updates the status bar, but also clears the 
 * selection.
 */
async function toggleSelection(): Promise<void> {
    let oldSelecting = selecting
    if (oldSelecting)
        await vscode.commands.executeCommand("cancelSelection")
    selecting = !oldSelecting
    updateCursorAndStatusBar(vscode.window.activeTextEditor)
}
/**
 * The following helper function actually determines, if a selection is active.
 * It checks not only the `selecting` flag but also if there is any text 
 * selected in the active editor.
 */
function isSelecting(): boolean {
    if (normalMode && selecting)
        return true
    selecting = vscode.window.activeTextEditor!.selections.some(
        selection => !selection.anchor.isEqual(selection.active))
    return selecting
}
/**
 * Function that sets the selecting flag off. This function is called from one
 * event. The flag is resetted when the active editor changes. The function that
 * updates the status bar sets the flag on again, if there are any active 
 * selections.
 */
export function resetSelecting() {
    selecting = false
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
         * to normal mode, if necessary. Then we initialize the search string
         * to empty, and store the current selections in the 
         * `searchStartSelections` array. We need an array as the command also
         * works with multiple cursors. Finally we store the search arguments
         * in the module level variables.
         */
        searchReturnToNormal = normalMode
        actions.setLastCommand(searchId)
        if (!normalMode)
            enterNormal()
        setSearching(true)
        searchString = ""
        searchStartSelections = editor.selections
        searchBackwards = args.backwards || false
        searchCaseSensitive = args.caseSensitive || false
        searchWrapAround = args.wrapAround || false
        searchAcceptAfter = args.acceptAfter || Number.POSITIVE_INFINITY
        searchSelectTillMatch = args.selectTillMatch || false
        searchTypeAfterAccept = args.typeAfterAccept
        searchTypeBeforeNextMatch = args.typeBeforeNextMatch
        searchTypeAfterNextMatch = args.typeAfterNextMatch
        searchTypeBeforePreviousMatch = args.typeBeforePreviousMatch
        searchTypeAfterPreviousMatch = args.typeAfterPreviousMatch
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
        searchString += args
        highlightMatches(editor, searchStartSelections)
        if (searchString.length >= searchAcceptAfter)
            await acceptSearch()
    }
}
/**
 * The actual search functionality is located in this helper function. It is 
 * used by the actual search command plus the commands that jump to next and 
 * previous match.
 * 
 * The search starts from positions specified by the `selections` argument. If 
 * there are multilple selections (cursors) active, multiple searches are 
 * performed. Each cursor location is considered separately, and the next match
 * from that position is selected. The function does *not* make sure that found
 * matches are unique. In case the matches overlap, the number of selections 
 * will decrease. 
 */
function highlightMatches(editor: vscode.TextEditor,
    selections: vscode.Selection[]) {
    searchInfo = null
    if (searchString == "")
        /**
         * If search string is empty, we return to the start positions.
         */
        editor.selections = searchStartSelections
    else {
        /**
         * We get the text of the active editor as string. If we have
         * case-insensitive search, we transform the text to lower case.
         */
        let doc = editor.document
        let docText = searchCaseSensitive ?
            doc.getText() : doc.getText().toLowerCase()
        /**
         * Next we determine the search target. It is also transformed to 
         * lower case, if search is case-insensitive.
         */
        let target = searchCaseSensitive ?
            searchString : searchString.toLowerCase()
        editor.selections = selections.map(sel => {
            /**
             * This is the actual search that is performed for each cursor
             * position. The lambda function returns a new selection for each
             * active cursor. 
             */
            let startOffs = doc.offsetAt(sel.active)
            /** 
             * Depending on the search direction we find either the 
             * first or the last match from the start offset.
             */
            let offs = searchBackwards ?
                docText.lastIndexOf(target, startOffs - 1) :
                docText.indexOf(target, startOffs)
            if (offs < 0) {
                if (searchWrapAround)
                    /**
                     * If search string was not found but `wrapAround` argument
                     * was set, we try to find the search string from beginning
                     * or end of the document. If that fails too, we return
                     * the original selection and the cursor will not move.
                     */
                    offs = searchBackwards ?
                        docText.lastIndexOf(target) :
                        docText.indexOf(target)
                if (offs < 0) {
                    searchInfo = "Pattern not found"
                    return sel
                }
                let limit = (bw: boolean) => bw ? "TOP" : "BOTTOM"
                searchInfo =
                    `Search hit ${limit(searchBackwards)} continuing at ${
                    limit(!searchBackwards)}`
            }
            /**
             * If search was successful, we return a new selection to highlight 
             * it. First, we find the start and end position of the match.
             */
            let len = searchString.length
            let start = doc.positionAt(offs)
            let end = doc.positionAt(offs + len)
            /**
             * If the search direction is backwards, we flip the active and
             * anchor positions. Normally, the anchor is set to the start and
             * cursor to the end. Finally, we check if the `selectTillMatch`
             * argument is set. If so, we move only the active cursor position
             * and leave the selection start (anchor) as-is.
             */
            let [active, anchor] = searchBackwards ?
                [start, end] :
                [end, start]
            if (searchSelectTillMatch)
                anchor = sel.anchor
            return new vscode.Selection(anchor, active)
        })
    }
    editor.revealRange(editor.selection)
}
/**
 * ### Accepting Search
 * 
 * Accepting the search resets the mode variables. Additionally, if 
 * `typeAfterAccept` argument is set we run the given normal mode commands.
 */
async function acceptSearch() {
    setSearching(false)
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
        if (editor) {
            editor.selections = searchStartSelections
            editor.revealRange(editor.selection)
        }
    }
}
/**
 * ### Modifying Search String
 * 
 * Since we cannot capture the backspace character in normal mode, we have to
 * hook it some other way. We define a command `modaledit.deleteCharFromSearch`
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
 * Note that we need to also update the status bar to show the modified search
 * string. The `onType` callback that normally handles this is not getting
 * called when this command is invoked.
 */
function deleteCharFromSearch() {
    let editor = vscode.window.activeTextEditor
    if (editor && searching && searchString.length > 0) {
        searchString = searchString.slice(0, searchString.length - 1)
        highlightMatches(editor, searchStartSelections)
        updateCursorAndStatusBar(editor)
    }
}
/**
 * ### Finding Previous and Next Match
 * 
 * Using the `highlightMatches` function finding next and previous match is a 
 * relatively simple task. We basically just restart the search from
 * the current cursor position(s). 
 * 
 * We also check whether the search parameters include `typeBeforeNextMatch` or 
 * `typeAfterNextMatch` argument. If so, we invoke the user-specified commands 
 * before and/or after we jump to the next match.
 */
async function nextMatch(): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor && searchString) {
        if (searchTypeBeforeNextMatch)
            await typeNormalKeys({ keys: searchTypeBeforeNextMatch })
        highlightMatches(editor, editor.selections)
        if (searchTypeAfterNextMatch)
            await typeNormalKeys({ keys: searchTypeAfterNextMatch })
    }
}
/**
 * When finding the previous match we flip the search direction but otherwise do
 * the same routine as in the previous function.
 */
async function previousMatch(): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor && searchString) {
        if (searchTypeBeforePreviousMatch)
            await typeNormalKeys({ keys: searchTypeBeforePreviousMatch })
        searchBackwards = !searchBackwards
        highlightMatches(editor, editor.selections)
        searchBackwards = !searchBackwards
        if (searchTypeAfterPreviousMatch)
            await typeNormalKeys({ keys: searchTypeAfterPreviousMatch })
    }
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
        let label = args?.bookmark?.toString() || '0'
        let document = editor.document
        let position = editor.selection.active
        bookmarks[label] = new Bookmark(label, document, position)
    }
}
/**
 * Jumping to bookmark is also easy, just call the `changeSelection` function
 * we already defined. It makes sure that selection is visible.
 */
async function goToBookmark(args?: BookmarkArgs): Promise<void> {
    let label = args?.bookmark?.toString() || '0'
    let bm = bookmarks[label]
    if (bm) {
        await vscode.window.showTextDocument(bm.document)
        let editor = vscode.window.activeTextEditor
        if (editor) {
            if (args?.select)
                changeSelection(editor, editor.selection.anchor, bm.position)
            else
                changeSelection(editor, bm.position, bm.position)
        }
    }
}
/**
 * To show the list of bookmarks in the command menu, we provide a new command.
 */
async function showBookmarks(): Promise<void> {
    let items = Object.getOwnPropertyNames(bookmarks).map(name => bookmarks[name])
    let selected = await vscode.window.showQuickPick(items, {
        placeHolder: "Select bookmark to jump to",
        matchOnDescription: true
    })
    if (selected)
        await goToBookmark({ bookmark: selected.label })
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
 * example) we add the `modaledit.selectBetween` command. See the
 * [instructions](../README.html#selecting-text-between-delimiters) for the list 
 * of parameters this command provides.
 */
function selectBetween(args: SelectBetweenArgs) {
    let editor = vscode.window.activeTextEditor
    if (!editor)
        return
    if (typeof args !== 'object')
        throw Error(`${selectBetweenId}: Invalid args: ${JSON.stringify(args)}`)
    let doc = editor.document
    /**
     * Get position of cursor and anchor. These positions might be in "reverse" 
     * order (cursor lies before anchor), so we need to sort them into `lowPos` 
     * and `highPos` variables and corresponding offset variables. These are 
     * used to determine the search range later on. 
     * 
     * Since `to` or `from` parameter might be missing, we initialize the 
     * `fromOffs` and `toOffs` variables to low and high offsets. They delimit 
     * the range to be selected at the end.  
     */
    let cursorPos = editor.selection.active
    let anchorPos = editor.selection.anchor
    let [highPos, lowPos] = cursorPos.isAfterOrEqual(anchorPos) ?
        [cursorPos, anchorPos] : [anchorPos, cursorPos]
    let highOffs = doc.offsetAt(highPos)
    let lowOffs = doc.offsetAt(lowPos)
    let fromOffs = lowOffs
    let toOffs = highOffs
    /**
     * Next we determine the search range. The `startOffs` marks the starting
     * offset and `endOffs` the end. Depending on the specified scope these
     * variables are either set to start/end of the current line or the whole
     * document.
     * 
     * In the actual search, we have two main branches: one for the case when 
     * regex search is used and another for the normal text search.
     */
    let startPos = new vscode.Position(args.docScope ? 0 : lowPos.line, 0)
    let endPos = doc.lineAt(args.docScope ? doc.lineCount - 1 : highPos.line)
        .range.end
    let startOffs = doc.offsetAt(startPos)
    let endOffs = doc.offsetAt(endPos)
    if (args.regex) {
        if (args.from) {
            /**
             * This branch searches for regex in the `from` parameter starting 
             * from `startPos` continuing until `lowPos`. We need to find the 
             * last occurrence of the regex, so we have to add a global modifier 
             * `g` and iterate through all the matches. In case there are no
             * matches `fromOffs` gets the same offset as `startOffs` meaning
             * that the selection will extend to the start of the search scope.
             */
            fromOffs = startOffs
            let text = doc.getText(new vscode.Range(startPos, lowPos))
            let re = new RegExp(args.from, args.caseSensitive ? "g" : "gi")
            let match: RegExpExecArray | null = null
            while ((match = re.exec(text)) != null)
                fromOffs = startOffs + match.index +
                    (args.inclusive ? 0 : match[0].length)
        }
        if (args.to) {
            /**
             * This block finds the regex in the `to` parameter starting from
             * the range `[highPos, endPos]`. Since we want to find the first
             * occurrence, we don't need to iterate over the matches in this
             * case.
             */
            toOffs = endOffs
            let text = doc.getText(new vscode.Range(highPos, endPos))
            let re = new RegExp(args.to, args.caseSensitive ? undefined : "i")
            let match = re.exec(text)
            if (match)
                toOffs = highOffs + match.index +
                    (args.inclusive ? match[0].length : 0)
        }
    }
    else {
        /**
         * This branch does the regular text search. We retrieve the whole
         * search range as string and use `indexOf` and `lastIndexOf` methods
         * to find the strings in `to` and `from` parameters. Case insensitivity
         * is done by converting both the search range and search string to
         * lowercase.
         */
        let text = doc.getText(new vscode.Range(startPos, endPos))
        if (!args.caseSensitive)
            text = text.toLowerCase()
        if (args.from) {
            fromOffs = text.lastIndexOf(args.caseSensitive ?
                args.from : args.from.toLowerCase(), lowOffs - startOffs)
            fromOffs = fromOffs < 0 ? startOffs :
                startOffs + fromOffs + (args.inclusive ? 0 : args.from.length)
        }
        if (args.to) {
            toOffs = text.indexOf(args.caseSensitive ?
                args.to : args.to.toLowerCase(), highOffs - startOffs)
            toOffs = toOffs < 0 ? endOffs :
                startOffs + toOffs + (args.inclusive ? args.to.length : 0)
        }
    }
    if (cursorPos.isAfterOrEqual(anchorPos))
        /** 
         * The last thing to do is to select the range from `fromOffs` to
         * `toOffs`. We want to preserve the direction of the selection. If
         * it was reserved when this command was called, we flip the variables.
         */
        changeSelection(editor, doc.positionAt(fromOffs), doc.positionAt(toOffs))
    else
        changeSelection(editor, doc.positionAt(toOffs), doc.positionAt(fromOffs))
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
/**
 * ## Use Preset Keybindings
 * 
 * This command will overwrite to `keybindings` and `selectbindings` settings
 * with presets. The presets are stored under the subdirectory named `presets`.
 * Command scans the directory and shows all the files in a pick list. 
 * Alternatively the user can browse for other file that he/she has anywhere
 * in the file system. If the user selects a file, its contents will replace 
 * the key binding in the global `settings.json` file.
 * 
 * The presets can be defined as JSON or JavaScript. The code checks the file
 * extension and surrounds JSON with parenthesis. Then it can evaluate the 
 * contents of the file as JavaScript. This allows to use non-standard JSON 
 * files that include comments. Or, if the user likes to define the whole 
 * shebang in code, he/she just has to make sure that the code evaluates to an 
 * object that has `keybindings` and/or `selectbindings` properties.
 */
async function importPresets() {
    const browse = "Browse..."
    let presetsPath = vscode.extensions.getExtension("johtela.vscode-modaledit")!
        .extensionPath + "/presets"
    let fs = vscode.workspace.fs
    let presets = (await fs.readDirectory(vscode.Uri.file(presetsPath)))
        .map(t => t[0])
    presets.push(browse)
    let choice = await vscode.window.showQuickPick(presets, {
        placeHolder: "Warning: Selecting a preset will override current " +
            "keybindings in global 'settings.json'"
    })
    if (choice) {
        let uri = vscode.Uri.file(presetsPath + "/" + choice)
        if (choice == browse) {
            let userPreset = await vscode.window.showOpenDialog({
                openLabel: "Import presets",
                filters: {
                    JavaScript: ["js"],
                    JSON: ["json", "jsonc"],
                },
                canSelectFiles: true,
                canSelectFolders: false,
                canSelectMany: false
            })
            if (!userPreset)
                return
            uri = userPreset[0]
        }
        try {
            let js = new TextDecoder("utf-8").decode(await fs.readFile(uri))
            if (uri.fsPath.match(/jsonc?$/))
                js = `(${js})`
            let preset = eval(js)
            let config = vscode.workspace.getConfiguration("modaledit")
            if (!(preset.keybindings || preset.selectbindings))
                throw new Error(
                    `Could not find "keybindings" or "selectbindings" in ${uri}`)
            if (preset.keybindings)
                config.update("keybindings", preset.keybindings, true)
            if (preset.selectbindings)
                config.update("selectbindings", preset.selectbindings, true)
            vscode.window.showInformationMessage(
                "ModalEdit: Keybindings imported.")
        }
        catch (e) {
            vscode.window.showWarningMessage("ModalEdit: Bindings not imported.",
                `${e}`)
        }
    }
}