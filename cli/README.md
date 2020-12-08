usds-fa2-cli
============

Manage FA2 USDS on Tezos

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/usds-fa2-cli.svg)](https://npmjs.org/package/usds-fa2-cli)
[![Downloads/week](https://img.shields.io/npm/dw/usds-fa2-cli.svg)](https://npmjs.org/package/usds-fa2-cli)
[![License](https://img.shields.io/npm/l/usds-fa2-cli.svg)](https://github.com/Git-on-my-level/usds-fa2-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g usds-fa2-cli
$ usds-fa2 COMMAND
running command...
$ usds-fa2 (-v|--version|version)
usds-fa2-cli/0.0.0 darwin-x64 node-v12.16.1
$ usds-fa2 --help [COMMAND]
USAGE
  $ usds-fa2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`usds-fa2 hello [FILE]`](#usds-fa2-hello-file)
* [`usds-fa2 help [COMMAND]`](#usds-fa2-help-command)

## `usds-fa2 hello [FILE]`

```
USAGE
  $ usds-fa2 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ usds-fa2 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Git-on-my-level/usds-fa2-cli/blob/v0.0.0/src/commands/hello.ts)_

## `usds-fa2 help [COMMAND]`

```
USAGE
  $ usds-fa2 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
