import { ContractAbstraction, ContractProvider } from "@taquito/taquito";
import { BigNumber } from "bignumber.js";
import config from "../config";

export const burn = async (
  tokenContract: ContractAbstraction<ContractProvider>,
  tokenAmount: number | BigNumber
) => {
  return tokenContract.methods.burn([tokenAmount]).send();
};
