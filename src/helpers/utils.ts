import axios from "axios";
import { Buffer } from "buffer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hex2buf = (hex: any) => {
    return new Uint8Array(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      hex.match(/[\da-f]{2}/gi).map((h: any) => parseInt(h, 16))
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function bytes2Char(hex: any) {
    return Buffer.from(hex2buf(hex)).toString("utf8");
  }


const fetchData = async () => {
    try {
      const tokenAddr = "KT1CE1iA9TKxW43icMqvGRzuVe3zLZV9qgLD";
      const contaddr = "KT1NiLKWihGxocPeKG33VdJ8ZfURHvxvLz44";
      const response = await axios.get(
        `https://api.ghostnet.tzkt.io/v1/contracts/${contaddr}/bigmaps/data/keys`
      );
      const response1 = await axios.get(
        `https://api.ghostnet.tzkt.io/v1/contracts/${tokenAddr}/bigmaps/token_metadata/keys`
      );
      const d1 = response.data;
      const d2 = response1.data;
      const tokenData = [];
      for (let i = 0; i < d1.length; i++) {
        const s = bytes2Char(d2[i].value.token_info[""]).split("//").at(-1);
        const res = await axios.get("https://ipfs.io/ipfs/" + s);

        const l1 = d1[i].value;
        const l2 = res.data;
        tokenData[i] = {
          ...l1,
          ...l2,
          token_id: d2[i].value.token_id,
        };
      }
      return tokenData;
    } catch (e) {
      console.log(e);
    }
  };

export default fetchData;