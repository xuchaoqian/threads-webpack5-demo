import { expose } from "threads/worker";
import { GetUntilParams, Headers, Response } from "../internal";

const entry = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  init(endpoints: string[]) {
    //
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getUntil(params: GetUntilParams, headers: Headers): Promise<Response> {
    return { error: { code: 0 }, payload: [{ ts: 1 }] };
  },
};

export type Entry = typeof entry;

expose(entry);
