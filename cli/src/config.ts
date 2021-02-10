const config = {
  node: {
    endpoint: {
      delphinet: "https://testnet-tezos.giganode.io",
      mainnet: "https://mainnet-tezos.giganode.io",
    },
  },
  token: {
    address: {
      delphinet: "KT1WnjpKriR4yweiFdkTiMofoV9hvz7vMSXJ",
      mainnet: "KT1REEb5VxWRjcHm5GzDMwErMmNFftsE5Gpf",
    },
    decimals: 6,
    symbol: "USDS",
    defaultTokenId: 0,
  },
  explorer: {
    endpoint: {
      delphinet: "https://better-call.dev/delphinet",
      mainnet: "https://better-call.dev/mainnet",
    },
  },
};

export default config;
