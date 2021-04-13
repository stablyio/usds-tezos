usds-fa2-cli
============

Manage FA2 USDS on Tezos

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
usds-fa2-cli/0.0.0 darwin-x64 node-v15.4.0
$ usds-fa2 --help [COMMAND]
USAGE
  $ usds-fa2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`usds-fa2 balance`](#usds-fa2-balance)
* [`usds-fa2 burn`](#usds-fa2-burn)
* [`usds-fa2 help [COMMAND]`](#usds-fa2-help-command)
* [`usds-fa2 mint`](#usds-fa2-mint)
* [`usds-fa2 mint:allowance:get`](#usds-fa2-mintallowanceget)
* [`usds-fa2 mint:allowance:set`](#usds-fa2-mintallowanceset)
* [`usds-fa2 supply`](#usds-fa2-supply)
* [`usds-fa2 transfer`](#usds-fa2-transfer)

## `usds-fa2 balance`

```
USAGE
  $ usds-fa2 balance

OPTIONS
  --address=address            (required) The address to query
  --network=testnet|mainnet  [default: testnet] Tezos network to use
```

_See code: [src/commands/balance.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/balance.ts)_

## `usds-fa2 burn`

```
USAGE
  $ usds-fa2 burn

OPTIONS
  --amount=amount              (required) The amount to burn (e.g. 154.23)

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path instead of using the default. Must be a
                               "hardened" path where every section ends with a `'` character as enforced by the Tezos
                               app on Ledger

  --network=testnet|mainnet  [default: testnet] Tezos network to use

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction
```

_See code: [src/commands/burn.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/burn.ts)_

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

## `usds-fa2 mint`

```
USAGE
  $ usds-fa2 mint

OPTIONS
  --address=address            (required) The address to mint to
  --amount=amount              (required) The amount to mint (e.g. 154.23)

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path instead of using the default. Must be a
                               "hardened" path where every section ends with a `'` character as enforced by the Tezos
                               app on Ledger

  --network=testnet|mainnet  [default: testnet] Tezos network to use

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction
```

_See code: [src/commands/mint/index.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/mint/index.ts)_

## `usds-fa2 mint:allowance:get`

```
USAGE
  $ usds-fa2 mint:allowance:get

OPTIONS
  --address=address            (required) The address to get minting allowance for
  --network=testnet|mainnet  [default: testnet] Tezos network to use
```

_See code: [src/commands/mint/allowance/get.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/mint/allowance/get.ts)_

## `usds-fa2 mint:allowance:set`

```
USAGE
  $ usds-fa2 mint:allowance:set

OPTIONS
  --address=address            (required) The address to set minting allowance for
  --amount=amount              (required) The allowance to set (e.g. 154.23)

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path instead of using the default. Must be a
                               "hardened" path where every section ends with a `'` character as enforced by the Tezos
                               app on Ledger

  --network=testnet|mainnet  [default: testnet] Tezos network to use

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction
```

_See code: [src/commands/mint/allowance/set.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/mint/allowance/set.ts)_

## `usds-fa2 supply`

```
USAGE
  $ usds-fa2 supply

OPTIONS
  --network=testnet|mainnet  [default: testnet] Tezos network to use
```

_See code: [src/commands/supply.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/supply.ts)_

## `usds-fa2 transfer`

```
USAGE
  $ usds-fa2 transfer

OPTIONS
  --address=address            (required) The address to transfer to
  --amount=amount              (required) The amount to transfer (e.g. 154.23)

  --hdwpath=hdwpath            Specify a custom HD wallet derivation path instead of using the default. Must be a
                               "hardened" path where every section ends with a `'` character as enforced by the Tezos
                               app on Ledger

  --network=testnet|mainnet  [default: testnet] Tezos network to use

  --sigmethod=privkey|ledger   (required) Signature method for signing the transaction
```

_See code: [src/commands/transfer.ts](https://github.com/stablyio/usds-tezos/blob/v0.0.0/src/commands/transfer.ts)_
<!-- commandsstop -->
