import { TezosToolkit } from "@taquito/taquito";
import { TokenStorage } from "./types";
import { BigNumber } from "bignumber.js";

export const balance = async (
  provider: TezosToolkit,
  tokenStorage: TokenStorage,
  addressToQuery: string
) => {
  const mutezBalance = provider.tz.getBalance(addressToQuery);
  const rawTokenBalance = tokenStorage.ledger.get(
    addressToQuery
  ) as Promise<BigNumber>;
  return {
    rawTokenBalance: await rawTokenBalance,
    mutezBalance: await mutezBalance,
  };
};
