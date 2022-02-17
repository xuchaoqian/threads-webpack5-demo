import Client from "../src/Client";

getUntil().then(() => {
  console.log("done.");
});

async function getUntil() {
  const client = new Client(["127.0.0.1:8081"]);
  const params = {
    topic: {
      symbol: "NASDAQ:APPL",
      timeframe: "1m",
    },
    endTs: 1618758540,
    limit: 10,
  };
  const headers = {
    token: "",
  };
  const result = await client.getUntil(params, headers);
  console.log(result);
}
