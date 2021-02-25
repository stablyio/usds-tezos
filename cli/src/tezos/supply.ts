import { TokenStorage } from "./types";

export const supply = async (tokenStorage: TokenStorage) => {
  let rawTokenSupply = tokenStorage.total_supply;
  return rawTokenSupply;
};
