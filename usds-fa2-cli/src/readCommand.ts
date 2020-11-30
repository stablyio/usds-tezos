import Command, { flags } from "@oclif/command";
import {
  ContractAbstraction,
  ContractProvider,
  TezosToolkit,
} from "@taquito/taquito";
import BigNumber from "bignumber.js";

import { YES_VALUES, TEZOS_HDW_PATHS } from "./constants";
import { initProvider, initTokenContract } from "./tezos/init";
import config from "./config";
import { TokenStorage } from "./tezos/types";

export abstract class ReadCommand extends Command {
  static flags = {
    network: flags.string({
      description: "Tezos network to use",
      default: "delphinet",
      options: ["delphinet", "mainnet"],
    }),
  };

  network!: string;
  provider!: TezosToolkit;
  tokenContract!: ContractAbstraction<ContractProvider>;
  tokenStorage!: TokenStorage;

  async init() {
    const { flags } = this.parse(this.constructor as typeof ReadCommand);
    this.network = flags.network;
    this.provider = await initProvider(this.network);
    this.tokenContract = await initTokenContract(this.network, this.provider);
    this.tokenStorage = await this.tokenContract.storage();
  }

  async run() {
    this.log(`Using network: ${this.network}`);
  }

  intToDecimalRepresentation(
    int: BigNumber | number,
    decimals: number
  ): BigNumber {
    int = new BigNumber(int);
    if (!int.isInteger()) {
      throw new Error(
        `Expected conversion input to be integer, instead got ${int}`
      );
    }
    return int.shiftedBy(-decimals);
  }

  decimalToIntRepresentation(
    int: BigNumber | number,
    decimals: number
  ): BigNumber {
    int = new BigNumber(int);
    const shiftedInt = int.shiftedBy(decimals);
    return shiftedInt.decimalPlaces(0, BigNumber.ROUND_FLOOR);
  }

  getExplorerLinkForTxHash(txHash: string): string {
    if (this.network == "mainnet") {
      return `${config.explorer.endpoint.mainnet}/opg/${txHash}`;
    }
    if (this.network == "delphinet") {
      return `${config.explorer.endpoint.delphinet}/opg/${txHash}`;
    }
    return "URL not available";
  }
}
