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

## Version 2.0

Major release containing lot of new features and improvements. 

### Preset keybindings

It is possible now to import keybindings through the `modaledit.importPresets`
command. [Vim presets](preset/vim.html) are included in the extension
([#7](https://github.com/johtela/vscode-modaledit/issues/7)). The presets can be
also defined as JavaScript ([#9](https://github.com/johtela/vscode-modaledit/issues/9)).
They are evaluated or "compiled" to JSON when import is run.

### Improvements to Search

Search command has several new features:

- Multicursor search ([#5](https://github.com/johtela/vscode-modaledit/issues/5),
  [#12](https://github.com/johtela/vscode-modaledit/pull/12)) is now working.

- There are four new parameters: `typeBeforeNextMatch`, `typeAfterNextMatch`,
  `typeBeforePreviousMatch`, and `typeAfterPreviousMatch`. These can be used to
  run key commands after `modaledit.nextMatch` and `modaledit.previousMathch`
  commands. The need for these parameters arose when implementing Vim's `t` and
  `f` key commands. These commands look for specified character and place the 
  cursor either on it or before it. Without the new parameters, it would not 
  be possible to emulate Vim's behavior using `modaledit.search`. This is 
  because by default, it selects the search string and search always starts from 
  the current cursor position. To make jumping to next and previous character 
  possible, we need to adjust the cursor position before and after the commands.

- New parameter `wrapAround` causes the search to jump the beginning/end of
  the file if it hits bottom/top. This closes issue [#8](https://github.com/johtela/vscode-modaledit/issues/8)

- The implementation of `modaledit.search` and `modaledit.selectBetween` 
  commands have been refactored. Adding the new parameters described above made
  it possible to simplify the implementation and remove hacky code. The changes 
  should not break existing functionality but make these commands work more 
  logically and consistently. For example, both of the commands now work 
  properly when they are used to extend the existing selection.

### Cursor and Status Bar Configuration

You can now define a different cursor shape when selection is active in normal
mode using the `selectCursorStyle`. Also, you can 
[change the status bar text](README.html#changing-status-bar) shown in each 
mode. It is possible to include icons in the status bar, if you like. This 
should be sufficient to close issue 
[#13](https://github.com/johtela/vscode-modaledit/issues/13)

A secondary status bar was added to show the keys that have been pressed so far. 
It also shows help messages defined in bindings and  warnings from the search 
command.

### Bookmark Improvements

There is a new command `modaledit.showBookmarks` that shows all the defined 
bookmarks. You can jump to any of them by selecting one in the list. Also,
the bookmark can now be any string instead of a number. This actually worked 
previously, but now documentation about this is updated too.

New parameter `select` in the `modaledit.goToBookmark` command extends selection
till the bookmark instead of putting the cursor on it. This makes it possible to
use bookmarks as selection scoping mechanism à la Vim.  

### Changes Concerning JS Expressions

New variables `__cmd` and `__rcmd` can be used in JS expressions. They contain
the key sequence that was pressed as a string. They correspond to expressions:
```js
__cmd = __keys.join('')
__rcmd = __rkeys.join('')
```
In many cases, these variables allow you to write expressions that inspect the 
key sequence in a shorter form.

All the variants of `__keys` or `__keySequence` variables now contain the actual
key sequence that was used to invoke the command. Previously they contained the
sequence that _the user_ pressed. Since you can also invoke key commands
programmatically using `modaledit.typeNormalKeys`, this made implementing 
reusable commands more difficult. You could not rely on the key sequence to 
correspond to the path to the keybinding you were defining. Now you can rely 
that the `__keys` variable and its variants contain the path to the binding, 
which should make sure that commands work correctly when invoked through 
`modaledit.typeNormalKeys`.

### Other Changes

- Configuration section called `selectbindings` can be used to define key 
  bindings that are in effect when selection is active. This allows you to 
  define different key sequences for same leader keys in normal mode and 
  selecion mode.

  For example in Vim, the `d` key is in normal mode the leader key for sequences
  such as `dw` (delete word) or `dip` (delete inside paragraph). In visual
  (selection) mode, `d` deletes the selected text. Previously it was not 
  possible to have such keymaps, but with `selectbindings` you can now define
  them.
  
- `selecting` flag is now refreshed when you switch between files. The select
  mode no longer "sticks" between tabs.