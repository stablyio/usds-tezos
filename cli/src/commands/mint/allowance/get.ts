import { flags } from "@oclif/command";

import { ReadCommand } from "../../../readCommand";
import { getAllowance } from "../../../tezos/mint/allowance";
import config from "../../../config";

export default class AllowanceGet extends ReadCommand {
  static flags = {
    ...ReadCommand.flags,
    address: flags.string({
      description: "The address to get minting allowance for",
      required: true,
    }),
  };

  async run() {
    await super.run();
    const { flags } = this.parse(AllowanceGet);
    const minterAddress: string = flags.address;

    const currentRawAllowance = getAllowance(this.tokenStorage, minterAddress);
    const currentDecimalAllowance = currentRawAllowance
      ? this.intToDecimalRepresentation(
          currentRawAllowance,
          config.token.decimals
        )
      : 0;

    this.log(`Mint allowance for: ${minterAddress}`);
    this.log(`Amount: ${currentDecimalAllowance}`);
  }
}
