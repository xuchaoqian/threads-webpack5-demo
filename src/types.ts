export type Topic = {
  symbol: string;
  timeframe: string;
};

export type GetUntilParams = {
  topic: Topic;
  endTs: number;
  limit: number;
};

export type Headers = {
  token: string;
};

export type Row = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type Response = {
  error: { code: number; desc?: string };
  payload?: Row[];
};
