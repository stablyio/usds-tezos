export const YES_VALUES = new Set(["Y", "YES"]);
// Popular derivation paths for hierarchical deterministic wallet generation
// m / purpose' / coin_type' / account' / change / address_index
// https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki

export const TEZOS_HDW_PATHS = [
  "m/44'/1729'/0'/0/0", // Official BIP 44 format
  "m/44'/1729'/0'/0", // Common legacy format
  "m/44'/60'/0'/0'", // Does last ' make a difference?
];

export const XTZ_DECIMALS = 6;
