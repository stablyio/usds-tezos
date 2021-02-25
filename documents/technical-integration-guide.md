# USDS FA2 Technical Integration Guide
USDS is a single-asset fungible stablecoin implemented using the FA2 standard, so if you already support FA2 it's likely that supporting USDS is easy! The FA2 standard was introduced by [TZIP-12](https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md) which lays out the specifications of the interface.

## A guide for those coming from Ethereum
For this guide we will be using the [Taquito library](https://github.com/ecadlabs/taquito), it is well documented, easy to use, and aims to fill a similar role as [web3.js](https://github.com/ChainSafe/web3.js).

Getting started is easy, you just need to set up a signing account, write the interfaces for reading and writing to your desired methods, and you're good to go!

### Set up a signing account on testnet
Signing on Tezos works the same way as Ethereum. You can easily take a signed transaction and broadcast it to the network. A signer can interact with any node that accepts the Tezos RPCs. One example of a public node provider is [Tezos Giga Node](https://tezos.giganode.io/).

### Reading and writing
There are two main ways to interact with Tezos smart contracts. You can read the data (from storage) or broadcast new transactions (which change storage). 

Reading data is free, all you have to do is look into the storage. For example here's a [JavaScript object representation of USDS storage](../cli/src/tezos/types/tokenStorage.ts).

Creating, signing, and broadcasting a transaction can also be done easily. Let's look at how you would envoke the `transfer` endpoint for our FA2 asset.

In Ethereum you would have access to the ABI which defines the entrypoints for your program to interact with, but in Tezos the Michelson code itself is stored on-chain. We can simply take the definition above and translate it into an object that Taquito can understand.

Definition of the `transfer` entrypoint in Michelson
```
(list %transfer
  (pair
    (address %from_)
    (list %txs
      (pair
        (address %to_)
        (pair
          (nat %token_id)
          (nat %amount)
        )
      )
    )
  )
)
```

Parameters you would pass to Taquito (a JavaScript object)
```
[
    {
        from_: signerAddress,
        txs: [
            {
                to_: recipientAddress,
                token_id: tokenId,
                amount: tokenAmount,
            },
        ],
    },
]
```

### Other considerations
You must explicitly reveal your public key before you sign your first transaction with a new key pair. 

FA2 supports multi-asset tokens, so for USDS which is single-asset we only use `token_id := 0` whenever it is required to be provided as part of the standard.

FA2 supports batch-transfers by default.

USDS also implements [TZIP-16](https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-16/tzip-16.md) which standardizes how metadata is surfaced.

USDS also implements [TZIP-17](https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-17/tzip-17.md) which enables users to pre-sign transactions for a 3rd party to submit (enabling things like gasless send).

## Further Readings
A typescript implementation of a CLI that interacts with USDS using Taquito [is also in this repo](../cli).

The USDS smart contract in the high level LIGO language [is also in this repo](../token/ligo/stablecoin).

Read the [Taquito docs](https://tezostaquito.io/).

View the [USDS Michelson code on-chain](https://better-call.dev/mainnet/KT1REEb5VxWRjcHm5GzDMwErMmNFftsE5Gpf/code).
