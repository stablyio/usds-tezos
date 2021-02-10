import { flags } from "@oclif/command";

import { SignCommand } from "../signCommand";
import { burn } from "../tezos";
import config from "../config";
import cli from "cli-ux";
import { YES_VALUES } from "../constants";

export default class Burn extends SignCommand {
  static flags = {
    ...SignCommand.flags,
    amount: flags.string({
      description: "The amount to burn (e.g. 154.23)",
      required: true,
    }),
  };

  async run() {
    await super.run();
    const { flags } = this.parse(Burn);
    const decimalBurnAmount: number = Number(flags.amount);

    const rawTransferAmount = this.decimalToIntRepresentation(
      decimalBurnAmount,
      config.token.decimals
    );
    const senderAddress = await this.getSignerAddress();

    this.log(
      `You are about to burn ${decimalBurnAmount} ${config.token.symbol} from ${senderAddress}`
    );
    const confirmBroadcast = await cli.prompt("Confirm (Y/N)");
    if (!YES_VALUES.has(confirmBroadcast.toUpperCase())) {
      this.log("Aborting operation");
      this.exit();
    }
    try {
      cli.action.start("Broadcasting transaction");
      const op = await burn(this.tokenContract, rawTransferAmount);
      cli.action.stop("acknowledged");
      this.log(`Tx hash: ${op.hash}`);
      this.log(`${this.getExplorerLinkForTxHash(op.hash)}`);
    } catch (err) {
      this.log(err);
    }
  }
}
