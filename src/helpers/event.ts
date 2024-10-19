import { DAppClient, TezosOperationType } from "@airgap/beacon-sdk";

const getEventData = async (dAppClient: DAppClient)=>{
    const Tezos = new TezosToolkit("https://mainnet.smartpy.io");

    try {
        const result = await dAppClient.requestOperation({
          operationDetails: [
            {
              kind: TezosOperationType.TRANSACTION,
              amount: "1",
              destination: "KT1Q8c6ZFoxG8f4cQEHpamirD2SQijXL8pNH",
              parameters: {
                entrypoint: "buy_ticket",
                value: {
                  string: "ace",
                  int: "1"
                },
                
              },
            },
          ],
        });
      
        console.log(result);
      } catch (error) {
        console.error(
          `The contract call failed and the following error was returned:`,
          error?.data[1]?.with?.string,
        );
      }
}

export default getEventData;