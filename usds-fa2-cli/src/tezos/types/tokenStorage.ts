import { BigNumber } from "bignumber.js";
import { BigMapAbstraction, MichelsonMap } from "@taquito/taquito";

export interface TokenStorage {
  default_expiry: BigNumber;
  ledger: BigMapAbstraction;
  metadata: BigMapAbstraction;
  minting_allowances: MichelsonMap<string, BigNumber>;
  operators: BigMapAbstraction;
  paused: boolean;
  permit_counter: BigNumber;
  permits: BigMapAbstraction;
  roles: {
    master_minter: string;
    owner: string;
    pauser: string;
    pending_owner: string;
  };
  token_metadata_registry: string;
  transferlist_contract: any;
}
