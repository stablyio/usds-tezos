import { flags } from "@oclif/command";

import { SignCommand } from "../signCommand";
import { transfer } from "../tezos";
import config from "../config";
import cli from "cli-ux";
import { YES_VALUES } from "../constants";

export default class Transfer extends SignCommand {
  static flags = {
    ...SignCommand.flags,
    address: flags.string({
      description: "The address to transfer to",
      required: true,
    }),
    amount: flags.string({
      description: "The amount to transfer (e.g. 154.23)",
      required: true,
    }),
  };

  async run() {
    await super.run();
    const { flags } = this.parse(Transfer);
    const recipientAddress: string = flags.address;
    const decimalTransferAmount: number = Number(flags.amount);

    const rawTransferAmount = this.decimalToIntRepresentation(
      decimalTransferAmount,
      config.token.decimals
    );
    const senderAddress = await this.getSignerAddress();

    this.log(
      `You are about to transfer from ${senderAddress} to ${recipientAddress}`
    );
    this.log(`A total of: ${decimalTransferAmount} ${config.token.symbol}`);
    const confirmBroadcast = await cli.prompt("Confirm (Y/N)");
    if (!YES_VALUES.has(confirmBroadcast.toUpperCase())) {
      this.log("Aborting operation");
      this.exit();
    }
    try {
      cli.action.start("Broadcasting transaction");
      const op = await transfer(
        this.tokenContract,
        senderAddress,
        recipientAddress,
        rawTransferAmount
      );
      cli.action.stop("acknowledged");
      this.log(`Tx hash: ${op.hash}`);
      this.log(`${this.getExplorerLinkForTxHash(op.hash)}`);
    } catch (err) {
      this.log(err);
    }
  }
}
