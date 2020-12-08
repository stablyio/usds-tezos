import { flags } from "@oclif/command";

import { SignCommand } from "../../signCommand";
import { mint } from "../../tezos/mint";
import config from "../../config";
import cli from "cli-ux";
import { YES_VALUES } from "../../constants";

export default class Mint extends SignCommand {
  static flags = {
    ...SignCommand.flags,
    address: flags.string({
      description: "The address to mint to",
      required: true,
    }),
    amount: flags.string({
      description: "The amount to mint (e.g. 154.23)",
      required: true,
    }),
  };

  async run() {
    await super.run();
    const { flags } = this.parse(Mint);
    const recipientAddress: string = flags.address;
    const decimalMintAmount: number = Number(flags.amount);

    const rawMintAmount = this.decimalToIntRepresentation(
      decimalMintAmount,
      config.token.decimals
    );

    this.log(`You are about to mint to: ${recipientAddress}`);
    this.log(`A total of: ${decimalMintAmount} ${config.token.symbol}`);
    const confirmBroadcast = await cli.prompt("Confirm (Y/N)");
    if (!YES_VALUES.has(confirmBroadcast.toUpperCase())) {
      this.log("Aborting operation");
      this.exit();
    }
    try {
      cli.action.start("Broadcasting transaction");
      const op = await mint(
        this.tokenContract,
        recipientAddress,
        rawMintAmount
      );
      cli.action.stop("acknowledged");
      this.log(`Tx hash: ${op.hash}`);
      this.log(`${this.getExplorerLinkForTxHash(op.hash)}`);
    } catch (err) {
      this.log(err);
    }
  }
}
