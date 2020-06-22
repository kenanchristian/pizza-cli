pizza-cli
=========

A CLI for Pizza!

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pizza-cli.svg)](https://npmjs.org/package/pizza-cli)
[![Downloads/week](https://img.shields.io/npm/dw/pizza-cli.svg)](https://npmjs.org/package/pizza-cli)
[![License](https://img.shields.io/npm/l/pizza-cli.svg)](https://github.com/kenanchristian/pizza-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pizza-cli
$ pizza COMMAND
running command...
$ pizza (-v|--version|version)
pizza-cli/0.0.0 darwin-x64 node-v10.16.3
$ pizza --help [COMMAND]
USAGE
  $ pizza COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pizza hello [FILE]`](#pizza-hello-file)
* [`pizza help [COMMAND]`](#pizza-help-command)

## `pizza hello [FILE]`

describe the command here

```
USAGE
  $ pizza hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pizza hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kenanchristian/pizza-cli/blob/v0.0.0/src/commands/hello.ts)_

## `pizza help [COMMAND]`

display help for pizza

```
USAGE
  $ pizza help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_
<!-- commandsstop -->
