import { ContractAbstraction, ContractProvider } from "@taquito/taquito";
import { BigNumber } from "bignumber.js";

export const mint = async (
  tokenContract: ContractAbstraction<ContractProvider>,
  recipientAddress: string,
  tokenAmount: number | BigNumber
) => {
  return tokenContract.methods
    .mint([
      {
        to_: recipientAddress,
        amount: tokenAmount,
      },
    ])
    .send();
};
