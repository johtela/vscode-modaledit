/**
 * # Extension Entry Point
 * 
 * The module `vscode` contains the VS Code extensibility API. The other
 * modules are part of the extension.
 */
import * as vscode from 'vscode'
import * as actions from './actions'
import * as commands from './commands'

/** 
 * This method is called when the extension is activated. The activation events
 * are set in the `package.json` like this:
 * ```js
 * "activationEvents": [ "*" ],
 * ```
 * which means that the extension is activated as soon as VS Code is running.
 */
export function activate(context: vscode.ExtensionContext) {

	/**
	 * The commands are defined in the `package.json` file. We register them
	 * with function defined in the `commands` module. 
	 */
	commands.register(context)
	/**
	 * Next we update the active settings from the config file.
	 */
	actions.updateFromConfig()
	/**
	 * Then we subscribe to events we want to react to, and at last, we enter 
	 * into normal or edit mode depending on the settings.
	 */
	context.subscriptions.push(
		vscode.workspace.onDidChangeConfiguration(actions.updateFromConfig),
		vscode.window.onDidChangeVisibleTextEditors(editors =>
			editors.forEach(commands.updateCursorAndStatusBar)),
		vscode.window.onDidChangeTextEditorSelection(e =>
			commands.updateStatusBar(e.textEditor)))
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