import { ContractAbstraction, ContractProvider } from "@taquito/taquito";
import { BigNumber } from "bignumber.js";
import config from "../config";

export const transfer = async (
  tokenContract: ContractAbstraction<ContractProvider>,
  signerAddress: string,
  recipientAddress: string,
  tokenAmount: number | BigNumber
) => {
  return tokenContract.methods
    .transfer([
      {
        from_: signerAddress,
        txs: [
          {
            to_: recipientAddress,
            token_id: config.token.defaultTokenId,
            amount: tokenAmount,
          },
        ],
      },
    ])
    .send();
};
