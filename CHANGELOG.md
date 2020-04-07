# Change Log

All notable changes to the ModalEdit extension will be documented in this file.

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

## Version 1.4

- Fixed few issues with `modaledit.search` command.
- You can use `__selection` variable in JS expressions to access currently
  selected text.  

## Version 1.5

Update that was sparked by issue [#6](https://github.com/johtela/vscode-modaledit/issues/6).
Contains multiple new features:

- `repeat` attribute added to commands with parameters.
- Keymaps can contain [key ranges](https://johtela.github.io/vscode-modaledit/docs/README.html#key-ranges).
- Support for [recursive keymaps](https://johtela.github.io/vscode-modaledit/docs/README.html#defining-recursive-keymaps).
- New `__keySequence` variable added to JS expressions. Contains the key
  sequence that was used to invoke a command.
- New property `help` added to keymaps. The help string is shown in the status
  bar when the associated keymap is active.
- Added ModalEdit log to [output window](https://johtela.github.io/vscode-modaledit/docs/README.html#debugging-keybindings).
- Semi-large refactoring of type definitions in the [actions module](https://johtela.github.io/vscode-modaledit/docs/src/actions.html).

## Version 1.6

- [New command `modaledit.selectBetween`](https://johtela.github.io/vscode-modaledit/docs/README.html#selecting-text-between-delimiters) 
  selects text between two delimiter strings. Especially useful when combined 
  with the key ranges and recursive keymaps introduced in version 1.5.
- Added a shorter alias `__keys` to the `__keySequence` variable available in
  JS expressions.

## Version 1.7

Two "repeat" related bigger improvements:

- New [`modaledit.repeatLastChange` command](https://johtela.github.io/vscode-modaledit/docs/README.html#repeat-last-change) 
  emulates Vim's dot `.` command quite faithfully.
- The `repeat` property used in context with 
  [commands taking arguments](https://johtela.github.io/vscode-modaledit/docs/README.html#commands-with-arguments) can now also contain a JS expression that 
  returns a boolean value. In this case, the value is used as a condition that
  tells if the command should be repeated. The command is repeated as long as
  the expression returns a truthy value.

And some minor changes:

- New variable `__rkeys` available for use in JS expressions. It contains the
  keys pressed to invoke a command in reverse order. This is handy if you need
  to access the last keys in the sequence. They are conveniently the first ones
  in `__rkeys`.
- Removed unneeded images from the extension package. The package is now 3 MBs
  smaller.
