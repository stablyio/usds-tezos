import { TezosToolkit } from "@taquito/taquito";
import { InMemorySigner } from "@taquito/signer";

export const mint = async () => {
  const Tezos = new TezosToolkit(
    "https://tezos-dev.cryptonomic-infra.tech:443"
  );
  const wallet = Tezos.setProvider({
    signer: new InMemorySigner("TODO"),
  });

  const contract = await Tezos.contract.at(
    "KT1KzU8LTcrHMXL7bBTjrrJjsgtpxng4pqAG"
  );
  try {
    const op = await contract.methods
      .mint([
        {
          to_: "tz1ahLNS2nLCac4SJ1TH6JuREK83RJ44Dh1s",
          amount: 13,
        },
      ])
      .send();
    console.log(op);
  } catch (err) {
    console.error(err);
  }
};
