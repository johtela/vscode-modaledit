# Change Log

All notable changes to the "vscode-modaledit" extension will be documented in this file.

## Version 1.0

- Initial release

## Version 1.1

- Added `selectTillMatch` argument to `modalEdit.search` command.
- Editor does not automatically revert back to normal mode when changing window.

## Version 1.2

- Added `startInNormalMode` setting, resolving issue 
  [#1](https://github.com/johtela/vscode-modaledit/issues/1)


## Version 1.3

- Incremental search now returns to insert mode, if it was invoked from there 
  [#4](https://github.com/johtela/vscode-modaledit/issues/4)
- Added new command `modaledit.typeNormalKeys` which can be used to "call"
  key bindings. Also fixes issue 
  [#3](https://github.com/johtela/vscode-modaledit/issues/3)
- Added new argument `typeAfterAccept` to `modaledit.search` command. This 
  invokes normal mode key bindings (using `modaledit.typeNormalKeys`) after
  successful search. The argument can be used to enter insert mode, or clear 
  selection after search, for example.
