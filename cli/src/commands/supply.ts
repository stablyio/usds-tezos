import { ReadCommand } from "../readCommand";
import { supply } from "../tezos";

export default class Supply extends ReadCommand {
  static flags = {
    ...ReadCommand.flags,
  };

  async run() {
    await super.run();
    await supply(this.provider, this.tokenContract);
  }
}
