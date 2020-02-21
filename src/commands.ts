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

export function toggle() {
    if (normalMode)
        enterInsert()
    else
        enterNormal()
}

export function enterNormal() {
    cancelSearch()
    if (!typeSubscription)
        typeSubscription = vscode.commands.registerCommand("type", onType)
    setNormalMode(true)
    cancelSelection()
}

export function enterInsert() {
    cancelSearch()
    if (typeSubscription) {
        typeSubscription.dispose()
        typeSubscription = undefined
    }
    setNormalMode(false)
}

async function setNormalMode(value: boolean): Promise<void> {
    const editor = vscode.window.activeTextEditor
    if (editor) {
        await vscode.commands.executeCommand("setContext", "modaledit.normal",
            value)
        normalMode = value
        updateCursorAndStatusBar(editor)
    }
}

export function updateCursorAndStatusBar(editor: vscode.TextEditor | undefined) {
    if (editor)
        editor.options.cursorStyle =
            searching ? actions.getSearchCursorType() :
                normalMode ? actions.getNormalCursorStyle() :
                    actions.getInsertCursorStyle()
    updateStatusBar(editor)
}

export function updateStatusBar(editor: vscode.TextEditor | undefined) {
    if (editor) {
        if (searching)
            statusBarItem.text = `SEARCH [${searchBackwards ? "B" : "F"
                }${searchCaseSensitive ? "S" : ""}]: ${searchString}`
        else {
            let sel = isSelecting() ? " [S]" : ""
            statusBarItem.text = normalMode ?
                `--NORMAL${sel}--` : `--INSERT${sel}--`
        }
        statusBarItem.show()
    }
    else
        statusBarItem.hide()
}

async function onType(event: { text: string }): Promise<void> {
    await actions.handleKey(event.text, isSelecting(), searching)
}

async function cancelSelection(): Promise<void> {
    await vscode.commands.executeCommand("cancelSelection")
    selecting = false
    updateStatusBar(vscode.window.activeTextEditor)
}

async function toggleSelection(): Promise<void> {
    let oldSelecting = isSelecting()
    await vscode.commands.executeCommand("cancelSelection")
    selecting = !oldSelecting
    updateStatusBar(vscode.window.activeTextEditor)
}

function isSelecting(): boolean {
    return selecting ||
        vscode.window.activeTextEditor!.selections.some(
            selection => !selection.anchor.isEqual(selection.active))
}

async function setSearching(value: boolean) {
    searching = value
    await vscode.commands.executeCommand("setContext",
        "modaledit.searching", value)
    updateCursorAndStatusBar(vscode.window.activeTextEditor)
    if (!(value || searchReturnToNormal))
        enterInsert()
}

function changeSelection(editor: vscode.TextEditor, anchor: vscode.Position,
    active: vscode.Position) {
    editor.selection = new vscode.Selection(anchor, active)
    editor.revealRange(editor.selection)
}

async function search(args: SearchArgs | string): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (!editor)
        return
    if (!args)
        args = {}
    if (typeof args == 'object') {
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
        await acceptSearch()
    else {
        highlightNextMatch(editor, editor.selection.anchor, searchString + args)
        if (searchString.length >= searchAcceptAfter)
            await acceptSearch()
    }
}

async function acceptSearch() {
    await setSearching(false)
    await typeAfterMatch()
}

async function typeAfterMatch() {
    if (searchTypeAfterAccept)
        await typeNormalKeys({ keys: searchTypeAfterAccept })
}

function highlightNextMatch(editor: vscode.TextEditor, startPos: vscode.Position,
    newSearchString: string, delta: number = 0) {
    if (newSearchString == "") {
        changeSelection(editor, searchStartPos, searchStartPos)
        searchString = newSearchString
    }
    else {
        let doc = editor.document
        let startOffs = doc.offsetAt(startPos) + delta
        let docText = searchCaseSensitive ?
            doc.getText() : doc.getText().toLowerCase()
        let target = searchCaseSensitive ?
            newSearchString : newSearchString.toLowerCase()
        let offs = searchBackwards ?
            docText.lastIndexOf(target, startOffs) :
            docText.indexOf(target, startOffs)
        if (offs >= 0) {
            searchString = newSearchString
            let newPos = doc.positionAt(offs)
            let start = searchSelectTillMatch ? searchStartPos : newPos
            changeSelection(editor, start,
                newPos.with(undefined, newPos.character + 
                    (newPos.isBefore(start) ? 0 : searchString.length)))
        }
    }
}

async function cancelSearch(): Promise<void> {
    if (searching) {
        await setSearching(false)
        let editor = vscode.window.activeTextEditor
        if (editor)
            changeSelection(editor, searchStartPos, searchStartPos)
    }
}

async function deleteCharFromSearch(): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor && searching && searchString.length > 0)
        highlightNextMatch(editor, searchStartPos,
            searchString.slice(0, searchString.length - 1))
}

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

async function previousMatch(): Promise<void> {
    searchBackwards = !searchBackwards
    await nextMatch()
    searchBackwards = !searchBackwards
}

async function defineBookmark(args?: BookmarkArgs): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor) {
        let document = editor.document
        let position = editor.selection.active
        bookmarks[args?.bookmark || 0] = { document, position }
    }
}

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

async function defineQuickSnippet(args?: QuickSnippetArgs): Promise<void> {
    let editor = vscode.window.activeTextEditor
    if (editor)
        quickSnippets[args?.snippet || 0] =
            editor.document.getText(editor.selection)
}

async function insertQuickSnippet(args?: QuickSnippetArgs): Promise<void> {
    let i = args?.snippet || 0
    let snippet = quickSnippets[i]
    if (snippet) {
        enterInsert()
        await vscode.commands.executeCommand("editor.action.insertSnippet",
            { snippet })
    }
}

async function typeNormalKeys(args: TypeNormalKeysArgs): Promise<void> {
    for (let i = 0; i < args.keys.length; i++)
        await onType({ text: args.keys[i] })
}