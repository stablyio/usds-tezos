import {
  TezosToolkit,
  ContractAbstraction,
  ContractProvider,
} from "@taquito/taquito";
import { TokenStorage } from "./types";
import { BigNumber } from "bignumber.js";

export const supply = async (tokenStorage: TokenStorage) => {
  let rawTokenSupply = tokenStorage.total_supply;
  return rawTokenSupply;
};
