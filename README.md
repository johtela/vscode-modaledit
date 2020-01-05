# DIY Normal Mode for VS Code

ModalEdit is a simple but powerful extension that adds configurable "normal"
mode to VS Code. [Vim][2] made the concept of [modal editing][1] popular among
many developers and IT professionals. ModalEdit is not a Vim emulation, though. 
It does not define any default key mappings out-of-the-box. Instead, it 
encourages you to create your own keyboard layout and customize the editor to 
suit your preferences.

As in Vim, the goal of the extension is to save your keystrokes and make editing 
as fast as possible. Unlike most Vim emulators, ModalEdit leverages the 
built-in features of VS Code. It uses commands provided by VS Code and other 
extensions. You can build complex operations by arranging commands into 
sequences. You can even define conditional commands that do different things 
based on editor state. Also, you can map these commands to arbitrarily long 
keyboard sequences.


## Getting Started

When extension is installed text documents will open in normal mode. The 
current mode is shown in the status bar. You can switch between modes by
clicking the pane in the status bar.

![Status bar](images/status-bar.gif)

In normal mode keys don't output characters but invoke commands. You can 
specify these commands in the `settings.json` file. To edit your user-level 
settings file, open command palette with `Ctrl+Shift+P` and look up command 
**Preferences: Open Settings (JSON)**. If you want the configuration to be 
project specific, edit the `settings.json` that is located in the `.vscode` 
directory under your project directory. 

To define the key mappings used in normal mode, add a property named 
`modaledit.keybindings`. You should define at least one binding that will switch 
the editor to the *insert mode*, which is the same as VS Code's default mode.
```js
"modaledit.keybindings": {
    "i": "modaledit.enterInsert"
}
```
When you save the `settings.json` file, keybindings take effect immediately.

ModalEdit adds a regular VS Code keyboard shortcut for `Esc` to return back to
normal mode. If you wish, you can remap this command to another key by
pressing `Ctrl+K Ctrl+S`. 

### Selections

ModalEdit does not have a separate selection/visual mode as Vim has. It is
possible to select text both in normal mode and insert mode. The `[S]` text in
the status bar indicates when there is text selected.

![Selection active](images/selected-text.png)

ModalEdit defines a new command `modaledit.toggleSelection` which allows
you to start selecting text in normal mode without holding down the shift key.
This imitates Vim's visual mode.


## Configuration

You can define the normal mode commands in four different ways. It is also
possible to combine them freely.

### Single Command

The simplest way is to map a key to a single command. This has the format:
```js
"<key>": "<command>"
```
The `<key>` needs to be a single character and `<command>` any valid VS Code
command. You can see the list of all of the available commands by opening
global settings with command **Preferences: Open Default Keyboard Shortcuts (JSON)**.

The example in the previous section maps the `i` key to the
`modaledit.enterInsert` command.

### Commands with Arguments

Some [commands][6] take arguments. For example `cursorMove` which allows you
to specify which direction and how much cursor moves. These commands can be
executed by defining an object with prefined properties:
```js
"<key>":  {
    "command": "<command>",
    "args": { ... } | "{ ... }"
}
```
The `<command>` is again a valid VS Code command. The `args` property contains 
whatever arguments the command takes. It can be specified as a JSON object
or as a string. If the value of the `args` property is a string, ModalEdit 
treats it as a JavaScript expression. It evaluates the expression and passes the 
result to the command. The following variables can be used inside expression 
strings:

| Variable      | Type      | Description 
| ------------- | --------- | -------------------------------------------------
| `__file`      | `string`  | The file name of the document that is edited.
| `__line`      | `number`  | The line number where the cursor is currently on.
| `__col`       | `number`  | The column number where the cursor is currently on.
| `__char`      | `string`  | The character under the cursor.
| `__selecting` | `boolean` | Flag that indicates whether selection is active.

Below is an example that maps key `o` to a command that moves the cursor to the 
end of line. It also selects the jumped range, if we have selection active.
```js
"o": {
    "command": "cursorMove",
    "args": "{ to: 'wrappedLineEnd', select: __selecting }"
},
```

### Sequence of Commands

To construct more complex operations consisting of multiple steps, you can 
define command sequences. Commands in a sequence will be run one after another. 
A sequence is defined as an array.
```js
"<key>": [ <command1>, <command2>, ... ]
```
In above, `<command>` can assume any of the supported forms: single command,
one with arguments, or conditional command (see below).

The next example maps the `f` key to a command sequence that first deletes the
selected text and then switch to insert mode. It corresponds to the `c` command 
in Vim.
```js
"f": [
    "deleteRight",
    "modaledit.enterInsert"
],
```

### Conditional Commands

For even more complex scenarios, you can define commands that run different 
commands depending on a specified condition. The most common use case for this 
is to run a different command when selection is active. The format of a 
conditional commands is:
```js
"<key>":  {
    "condition": "<condition>",
    "<result1>": <command1>,
    "<result2>": <command2>,
    ...
}
```
Here `<condition>` can be any valid JavaScript expression. You can use 
variables listed in the "Commands with Arguments" section in the expression. If 
the expression evaluates to `<result1>`, `<command1>` will be executed, if to 
`<result2>`, `<command2>` will be run, and so forth. If none of the defined
properties match the expression result, nothing is done. Commands can be of any 
kind: a single command, sequence, or command with arguments. 

Below is an example that moves cursor one word forward with `w` key. We use
the `__selecting` variable to determine if a selection is active. If so, we 
extend the selection using `cursorWordStartRightSelect` command, otherwise we 
just jump to next word with `cursorWordStartRight`.
```js
"w": {
    "condition": "__selecting",
    "true": "cursorWordStartRightSelect",
    "false": "cursorWordStartRight"
},
```

### Binding Key Sequences

When you want to define a multi-key sequence, nest the key bindings. You can 
define a two key command using the following format.
```js
"<key1>": {
    "<key2>": <command>
},
```
Again, the `<command>` can be in any of the forms described above. To invoke
the command you first press `<key1>` in normal mode followed by `<key2>`.

The example below defines two commands that are bound to key sequences `g - f`
(search forwards) and `g - b` (search backwards).
```js
"g": {
    "f": {
        "command": "modaledit.search",
        "args": {}
    },
    "b": {
        "command": "modaledit.search",
        "args": {
            "backwards": true
        }
    }
}
```

### Changing Cursors

You can set the cursor shape shown in each mode by changing the following 
settings. 

| Setting               | Default       | Description
| --------------------- | ------------- | -------------------------------------
| `insertCursorStyle`   | `line`        | Cursor shown in insert mode.
| `normalCursorStyle`   | `block`       | Cursor shown in normal mode.
| `searchCursorStyle`   | `underline`   | Cursor shown when incremental search is on.

The possible values are:

- `block`
- `block-outline`
- `line`
- `line-thin`
- `underline`
- `underline-thin`

### Example Configurations

You can find example key bindings [here][7]. These are my own settings. The 
cheat sheet for my keyboard layout is shown below. I have created it in 
<http://www.keyboard-layout-editor.com/>. Please note that my keyboard layout 
is Finnish, so the non-alphanumeric keys might be in strange places.

![My keyboard layout](images/keyboard-layout.png)

As you can see, I haven't followed Vim conventions but rather tailored the 
keyboard layout according to my own preferences. I encourage you to do the same. 

In general, you should not try to convert VS Code into a Vim clone. The editing
philosophies of Vim and VS Code are quite dissimilar. Targets of Vim operations
are defined with special range commands, whereas VS Code's commands operate on 
selected text. For example, to delete a word in Vim, you first press `d` to 
delete and then `w` for word. In VS Code you first select the word (with `W` or 
`e` key in my configuration) then you delete the selection with `d` key.

To better understand the difference, check out [Kakoune editor's documentation][8]. 
ModalEdit extends VS Code with normal mode editing, so you have more or less 
the same capabilities as in Kakoune.

## Additional VS Code Commands

ModalEdit adds few useful commands to VS Code's repertoire. They help you
create more Vim-like workflow for searching and navigation.

### Switching between Modes

Use the following commands to change the current editor mode. None of the 
commands require any arguments.

| Command                     | Description
| --------------------------- | ----------------------------------------------
| `modaledit.toggle`          | Toggles between modes
| `modaledit.enterNormal`     | Switches to normal mode
| `modaledit.enterInsert`     | Switches to insert mode
| `modaledit.toggleSelection` | Toggles selection mode on or off. Selection mode is implicitly on whenever editor has text selected
| `modaledit.cancelSelection` | Cancel selection mode and clear selection.

### Incremental Search

The standard search functionality in VS Code is quite clunky as it opens a 
dialog which takes you out of the editor. To achieve more fluid searching 
experience ModalEdit provides incremental search commands that mimic Vim's 
corresponding operations.

#### `modaledit.search`  

Starts incremental search. The cursor is changed to indicate that editor is in
search mode. Normal mode commands are suppressed while incremental search is
active. Just type the search string directly without leaving the editor. You 
can see the searched string in the status bar as well as the search parameters. 

![Searching](images/searching.gif)

The command takes following arguments. All of them are optional. 

| Argument        | Type      | Default     | Description
| --------------- | --------- | ----------- | ---------------------------------
| `backwards`     | `boolean` | `false`     | Search backwards. Default is forwards
| `caseSensitive` | `boolean` | `false`     | Search is case-sensitive. Default is case-insensitive
| `acceptAfter`   | `number`  | `undefined` | Accept search automatically after _x_ characters has been entered. This helps implementing quick one or two character search operations.

#### `modaledit.cancelSearch`

Cancels the incremental search, returns the cursor to the starting position, 
and switches back to normal mode. 

#### `modaledit.deleteCharFromSearch`

Deletes the last character of the search string. By default the backspace key
is bound to this command when ModalEdit is active and in search mode.

#### `modaledit.nextMatch`

Moves to the next match and selectes it. Which way to search depends on the
search direction.

#### `modaledit.previousMatch`

Moves to the previous match and selectes it. Which way to search depends on the
search direction.

### Bookmarks

To quickly jump inside documents ModalEdit provides two bookmark commands:

- `modaledit.defineBookmark` stores the current position in a bookmark, and 
- `modaledit.goToBookmark` jumps to the given bookmark.

Both commands take one argument which contains the bookmark index. It can be any 
number, so you can define unlimited number of bookmarks. If the argument is 
omitted, default value `0` is assumed. 
```js
{
    "command": "modaledit.defineBookmark",
    "args": {
        "bookmark": 0
    }
}
```

### Quick Snippets

Snippets come in handy when you need to insert boilerplate text. However, the 
problem with snippets is that very seldom one bothers to create a new one. If a 
snippet is used only a couple of times in a specific situation, the effort of 
defining it nullifies the advantage. 

With ModalEdit, you can create snippets quickly by selecting a region of text 
and invoking command `modaledit.defineQuickSnippet`. You can assign the snippet 
to a register by specifying its index as an argument.
```js
{
    "command": "modaledit.defineQuickSnippet",
    "args": {
        "snippet": 1
    }
}
```
Use the `modaledit.insertQuickSnippet` command to insert the defined snippet at 
the cursor position. It takes the same argument as `modaledit.defineQuickSnippet`.

A snippet can have arguments or placeholders which you can fill in after 
inserting it. These are written as `$1`, `$2`, ... inside the snippet. You can 
quickly define the arguments with the `modaledit.fillSnippetArgs` command. First 
multi-select all the arguments (by pressing `Alt` while selecting with a mouse), 
then run the command. After that, select the snippet itself and run the 
`modaledit.defineQuickSnippet` command.

In the following example key sequence `q - a` fills snippet arguments, 
`q - w - 1` defines snippet in register 1, and `q - 1` inserts it. 

![Quick snippet](images/quick-snippet.gif)

It is usually a good idea to run `editor.action.formatDocument` after inserting 
a snippet to clean up whitespace. You can do this automatically adding it
to the command sequence.
```js
"q": {
    "1": [
        {
            "command": "modaledit.insertQuickSnippet",
            "args": {
                "snippet": 1
            }
        },
        "editor.action.formatDocument"
    ],
}
```

## Release Notes

### 1.0.0

Initial release.


## Acknowledgements

I was using the [Simple Vim][3] extension for a long time, but was never fully 
happy with it. It shares the idea of being a simple extension reusing VS Code's 
functionality, but it is sorely lacking in configurability. If you don't like
its default key mappings, you are out of luck. 

Then I found extension called [Vimspired][4] which has a really great idea for
implementing modal editing: just add a section in the `settings.json` which 
contains the keymap for normal mode. This allows you to mimic Vim behavior, if 
you wish to do so, or take a completely different approach. For example, don't 
use `h`, `j`, `k`, `l` keys to move the cursor but `w`, `a`, `s`, `d` keys 
instead.   

I really like Vimspired, but still wanted to change some of its core behavior 
and add many additional features. I didn't want to harass the author with 
extensive pull requests, so I decided to implement my own take of the theme. I
shameleslly copied the core parts of Vimspired and then changed them beyond
recognition. Anyway, credit goes to [Brian Malehorn][5] for coming up with the 
great idea and helping me jump start my project.

[1]: https://unix.stackexchange.com/questions/57705/modeless-vs-modal-editors
[2]: https://www.vim.org/
[3]: https://marketplace.visualstudio.com/items?itemName=jpotterm.simple-vim
[4]: https://marketplace.visualstudio.com/items?itemName=bmalehorn.vimspired
[5]: https://marketplace.visualstudio.com/publishers/bmalehorn
[6]: https://code.visualstudio.com/api/references/commands#commands
[7]: https://gist.github.com/johtela/b63232747fdd465748fedb9ca6422c84
[8]: https://kakoune.org/why-kakoune/why-kakoune.html