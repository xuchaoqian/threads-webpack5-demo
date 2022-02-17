import Client from "../src/Client";

let client;

beforeAll(() => {
  client = new Client(["127.0.0.1:8081"]);
});

afterAll(async () => {
  await client.stop();
});

test("all", async () => {
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
  const r1 = await client.getUntil(params, headers);
  expect(r1).toEqual({ error: { code: 0 }, payload: [{ ts: 1 }] });
});
