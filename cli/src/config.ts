const config = {
  node: {
    endpoint: {
      testnet: "https://testnet-tezos.giganode.io",
      mainnet: "https://mainnet-tezos.giganode.io",
    },
  },
  token: {
    address: {
      testnet: "KT1WnjpKriR4yweiFdkTiMofoV9hvz7vMSXJ",
      mainnet: "KT1REEb5VxWRjcHm5GzDMwErMmNFftsE5Gpf",
    },
    decimals: 6,
    symbol: "USDS",
    defaultTokenId: 0,
  },
  explorer: {
    endpoint: {
      testnet: "https://better-call.dev/florencenet",
      mainnet: "https://better-call.dev/mainnet",
    },
  },
};

export default config;
