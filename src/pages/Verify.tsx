import { useState } from "react";
import { QrReader } from "../components";
import fetchData from "../helpers/utils";

interface Props {
  wallet: walletInterfaceProps;
}

const Verify = (props: Props) => {
  const [kyc, setKyc] = useState("");
  const [qrData, setQrdata] = useState("");
  const [hide, setHide] = useState(true);

  const checkTicket = async () => {
    const tokenData = await fetchData();
    console.log("Data: ", tokenData);
  };

  console.log(props);
  return (
    <>
      Verify
      <br />
      <input value={kyc} onChange={(e) => setKyc(e.target.value)} />
      <br />
      <button
        onClick={() => {
          setHide(false);
        }}
      >
        Scan QR
      </button>
      <br />
      {hide ? <></> : <QrReader setHide={setHide} setQrdata={setQrdata} />}
      <br />
      {qrData}
      <br />
      <button
        onClick={async () => {
          setHide(true);
          await checkTicket();
        }}
        disabled={qrData == "" || kyc == ""}
      >
        Verify Ticket
      </button>
    </>
  );
};

export default Verify;
