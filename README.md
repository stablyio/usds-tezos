# Tezos USDS
Contracts, tooling, and docs for USDS on Tezos.

## Structure
`/cli` - Command line tool built using [oclif](https://oclif.io/) for managing basic USDS operations

`/documents` - Related documentation

`/token` - [Git subtree](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt) which contains the [single asset FA2 stablecoin implementation by tqtezos](https://github.com/tqtezos/stablecoin)

## Contracts
| Network | Token Address                          |
| ------- | -------------------------------------- |
| Mainnet | `KT1REEb5VxWRjcHm5GzDMwErMmNFftsE5Gpf` |
| Testnet | `KT1UX2mx7Y9TTPnx4bGBNUkLakEZaMeZiZkz` |

### Audit
The security audit was conducted by Least Authority and their final report can be found [here](./documents/Least%20Authority%20-%20USDS%20Smart%20Contract%20Final%20Audit%20Report.pdf).

Reserve attestations and more information about the collateral can be found [on our website](https://www.stably.io/attestations/).

## Contact
Interested in integrating USDS? See our [integration guide](./documents/technical-integration-guide.md). Want some testnet tokens? Contact us or find it on a DEX.

Want to work together? [Contact us](https://www.stably.io/contact/).
