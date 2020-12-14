import { TezosToolkit } from "@taquito/taquito";
import { TokenStorage } from "./types";
import { BigNumber } from "bignumber.js";

export const balance = async (
  provider: TezosToolkit,
  tokenStorage: TokenStorage,
  addressToQuery: string
) => {
  const mutezBalance = await provider.tz.getBalance(addressToQuery);
  let rawTokenBalance = (await tokenStorage.ledger.get(
    addressToQuery
  )) as BigNumber;
  rawTokenBalance = rawTokenBalance ? rawTokenBalance : new BigNumber(0); // Storage is undefined if not initialized for address
  return {
    rawTokenBalance: rawTokenBalance,
    mutezBalance: mutezBalance,
  };
};
