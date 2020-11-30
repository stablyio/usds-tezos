import { flags } from "@oclif/command";
import {
  ContractAbstraction,
  ContractProvider,
  TezosToolkit,
} from "@taquito/taquito";
import { InMemorySigner } from "@taquito/signer";
import BigNumber from "bignumber.js";
import cli from "cli-ux";

import { ReadCommand } from "./readCommand";
import { YES_VALUES, TEZOS_HDW_PATHS } from "./constants";
import config from "./config";

export abstract class SignCommand extends ReadCommand {
  static flags = {
    ...ReadCommand.flags,
    sigmethod: flags.string({
      description: "Signature method for signing the transaction",
      options: ["privkey", "ledger"],
      required: true,
    }),
    privkey: flags.string({
      description:
        "[DANGER] The private key in plaintext used for signing the transaction. If provided no longer prompts the user. Useful for non-interactive use",
      hidden: true,
      dependsOn: ["sigmethod"],
      required: false,
    }),
    hdwpath: flags.string({
      description:
        "Specify a custom HD wallet derivation path and skip the prompt",
      dependsOn: ["sigmethod"],
      required: false,
    }),
  };

  // TODO implement with choices
  async createSigner(
    sigmethod: string,
    privkey: string | undefined,
    hdwpath: string | undefined
  ) {
    if (sigmethod == "privkey") {
      if (!privkey) {
        privkey = await cli.prompt("Private key to sign with", {
          type: "mask",
        });
      }
      this.provider.setProvider({
        signer: new InMemorySigner(privkey as string),
      });
    } else if (sigmethod == "ledger") {
    } else {
      this.log(`Unsupported signing method ${sigmethod}`);
      this.exit();
    }
  }

  async init() {
    await super.init();
    const { flags } = this.parse(this.constructor as typeof SignCommand);
    await this.createSigner(flags.sigmethod, flags.privkey, flags.hdwpath);
  }

  async run() {
    await super.run();
    this.log(`Signing as: ${await this.provider.signer.publicKeyHash()}`);
  }
}
