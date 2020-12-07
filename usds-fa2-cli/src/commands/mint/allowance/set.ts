import { flags } from "@oclif/command";

import { SignCommand } from "../../../signCommand";
import { getAllowance, setAllowance } from "../../../tezos/mint";
import config from "../../../config";
import cli from "cli-ux";
import { YES_VALUES } from "../../../constants";

export default class AllowanceSet extends SignCommand {
  static flags = {
    ...SignCommand.flags,
    address: flags.string({
      description: "The address to set minting allowance for",
      required: true,
    }),
    amount: flags.string({
      description: "The allowance to set (e.g. 154.23)",
      required: true,
    }),
  };

  async run() {
    await super.run();
    const { flags } = this.parse(AllowanceSet);
    const minterAddress: string = flags.address;
    const newDecimalAllowance: number = Number(flags.amount);

    const newRawAllowance = this.decimalToIntRepresentation(
      newDecimalAllowance,
      config.token.decimals
    );
    const currentRawAllowance = getAllowance(this.tokenStorage, minterAddress);
    const currentDecimalAllowance = currentRawAllowance
      ? this.intToDecimalRepresentation(
          currentRawAllowance,
          config.token.decimals
        )
      : 0;

    this.log(`You are about to set mint allowance for: ${minterAddress}`);
    this.log(`From: ${currentDecimalAllowance}`);
    this.log(`To: ${newDecimalAllowance}`);
    const confirmBroadcast = await cli.prompt("Confirm (Y/N)");
    if (!YES_VALUES.has(confirmBroadcast.toUpperCase())) {
      this.log("Aborting operation");
      this.exit();
    }
    try {
      cli.action.start("Broadcasting transaction");
      const op = await setAllowance(
        this.tokenContract,
        minterAddress,
        currentRawAllowance,
        newRawAllowance
      );
      cli.action.stop("acknowledged");
      this.log(`Tx hash: ${op.hash}`);
      this.log(`${this.getExplorerLinkForTxHash(op.hash)}`);
    } catch (err) {
      this.log(err);
    }
  }
}
