import * as vscode from 'vscode'
import * as actions from './actions'

interface SearchArgs {
    backwards?: boolean
    caseSensitive?: boolean
    acceptAfter?: number
    selectTillMatch?: boolean
}

interface BookmarkArgs {
    bookmark?: number
}

interface Bookmark {
    document: vscode.TextDocument
    position: vscode.Position
}

interface QuickSnippetArgs {
    snippet: number
}

let typeSubscription: vscode.Disposable | undefined
let statusBarItem: vscode.StatusBarItem
let normalMode = true
let selecting = false
let searching = false
let searchString: string
let searchStartPos: vscode.Position
let searchBackwards = false
let searchCaseSensitive = false
let searchAcceptAfter = Number.POSITIVE_INFINITY
let searchSelectTillMatch = false
let bookmarks: Bookmark[] = []
let quickSnippets: string[] = []

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
        if (!normalMode)
            enterNormal()
        setSearching(true)
        searchString = ""
        searchStartPos = editor.selection.active
        searchBackwards = args.backwards || false
        searchCaseSensitive = args.caseSensitive || false
        searchAcceptAfter = args.acceptAfter || Number.POSITIVE_INFINITY
        searchSelectTillMatch = args.selectTillMatch || false
    }
    else if (args == "\n")
        await setSearching(false)
    else {
        highlightNextMatch(editor, editor.selection.anchor, searchString + args)
        if (searchString.length >= searchAcceptAfter)
           await setSearching(false)
    }
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
        if (offs >= 0)
        {
            searchString = newSearchString
            let newPos = doc.positionAt(offs)
            changeSelection(editor, 
                searchSelectTillMatch ? searchStartPos : newPos,
                newPos.with(undefined, newPos.character + searchString.length))
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
            highlightNextMatch(editor, s.anchor, searchString,
                -searchString.length)
        else
            highlightNextMatch(editor, s.active, searchString)
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