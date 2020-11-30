import {
  TezosToolkit,
  ContractAbstraction,
  ContractProvider,
} from "@taquito/taquito";
import { TokenStorage } from "./types";
import { BigNumber } from "bignumber.js";

export const supply = async (
  provider: TezosToolkit,
  tokenContract: ContractAbstraction<ContractProvider>
) => {
  // TODO implement when we have a way to calculate total supply
  console.log("Not implemented");
};
