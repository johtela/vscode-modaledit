/**
 * # Extension Entry Point
 * 
 * The module 'vscode' contains the VS Code extensibility API. Import the module
 * and reference it with the alias vscode in your code below.
 */
import * as vscode from 'vscode'
import * as actions from './actions'
import * as commands from './commands'

/** 
 * This method is called when your extension is activated. Your extension is 
 * activated the very first time the command is executed.
 */
export function activate(context: vscode.ExtensionContext) {

	/**
	 * The commands are defined in the `package.json` file. We register them
	 * with function defined in the `commands` module. 
	 */
	commands.register(context)
	/**
	 * Next we update the action definitions from the config file.
	 */
	actions.updateFromConfig()
	/**
	 * Then we subscribe to events we want to react to.
	 */
	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration(actions.updateFromConfig),
		vscode.window.onDidChangeVisibleTextEditors(editors =>
			editors.forEach(commands.updateCursorAndStatusBar)),
		vscode.window.onDidChangeTextEditorSelection(e =>
			commands.updateStatusBar(e.textEditor)))
	/**
	 * Last, we enter into normal or edit mode depending on the settings.
	 */
	if (actions.getStartInNormalMode())
		commands.enterNormal()
	else
		commands.enterInsert()
}
/** 
 * This method is called when your extension is deactivated
 */
export function deactivate() {
	commands.enterInsert()
}