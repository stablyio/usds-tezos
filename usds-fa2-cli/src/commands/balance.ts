import { flags } from "@oclif/command";

import config from "../config";
import { ReadCommand } from "../readCommand";
import { balance } from "../tezos";
import { XTZ_DECIMALS } from "../constants";

export default class Balance extends ReadCommand {
  static flags = {
    ...ReadCommand.flags,
    address: flags.string({
      description: "The address to query",
      required: true,
    }),
  };

  async run() {
    await super.run();
    const { flags } = this.parse(Balance);
    const address: string = flags.address;
    const { rawTokenBalance, mutezBalance } = await balance(
      this.provider,
      this.tokenStorage,
      address
    );
    const xtzBalance = this.intToDecimalRepresentation(
      mutezBalance,
      XTZ_DECIMALS
    );
    const decimalTokenBalance = this.intToDecimalRepresentation(
      rawTokenBalance,
      config.token.decimals
    );
    this.log(`Balances for: ${address}`);
    this.log(`XTZ: ${xtzBalance}`);
    this.log(`${config.token.symbol}: ${decimalTokenBalance}`);
  }
}
