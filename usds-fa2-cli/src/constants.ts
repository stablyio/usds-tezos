export const YES_VALUES = new Set(["Y", "YES"]);
// Popular derivation paths for hierarchical deterministic wallet generation
// m / purpose' / coin_type' / account' / change / address_index
// https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

// Note: Current behavior on Taquito 7.0.1 dictates that the path must end with a `'` otherwise the process hangs
export const TEZOS_HDW_PATHS = [
  "44'/1729'/0'/0'", // This is what Taquito and Ledger Live defaults to
];

export const XTZ_DECIMALS = 6;
