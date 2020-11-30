import {
  TezosToolkit,
  ContractAbstraction,
  ContractProvider,
} from "@taquito/taquito";
import { TokenStorage } from "../types";
import { BigNumber } from "bignumber.js";

export const getAllowance = (
  tokenStorage: TokenStorage,
  minterAddress: string
) => {
  return tokenStorage.minting_allowances.get(minterAddress);
};

export const setAllowance = async (
  tokenContract: ContractAbstraction<ContractProvider>,
  minterAddress: string,
  currentMintingAllowance: number | BigNumber | null | undefined,
  newMintingAllowance: number | BigNumber
) => {
  return tokenContract.methods
    .configure_minter(
      minterAddress,
      currentMintingAllowance,
      newMintingAllowance
    )
    .send();
};
