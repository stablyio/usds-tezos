import config from "../config";
import { ReadCommand } from "../readCommand";
import { supply } from "../tezos";

export default class Supply extends ReadCommand {
  static flags = {
    ...ReadCommand.flags,
  };

  async run() {
    await super.run();
    const rawTokenSupply = await supply(this.tokenStorage);
    const decimalTokenSupply = this.intToDecimalRepresentation(
      rawTokenSupply,
      config.token.decimals
    );
    this.log(`${config.token.symbol} Total Supply: ${decimalTokenSupply}`);
  }
}
