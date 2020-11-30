import {
  ContractAbstraction,
  ContractProvider,
  TezosToolkit,
} from "@taquito/taquito";

import config from "../config";

export const initProvider = async (network: string): Promise<TezosToolkit> => {
  if (network == "delphinet") {
    return new TezosToolkit(config.node.endpoint.delphinet);
  }
  if (network == "mainnet") {
    return new TezosToolkit(config.node.endpoint.mainnet);
  }
  throw new Error(
    `Invalid network option ${network} for initializing Tezos provider`
  );
};

export const initTokenContract = async (
  network: string,
  provider: TezosToolkit
): Promise<ContractAbstraction<ContractProvider>> => {
  if (network == "delphinet") {
    return provider.contract.at(config.token.address.delphinet);
  }
  if (network == "mainnet") {
    return provider.contract.at(config.token.address.mainnet);
  }
  throw new Error(
    `Invalid network option ${network} for initializing token contract`
  );
};
