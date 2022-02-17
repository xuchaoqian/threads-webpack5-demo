import { spawn, Thread, ModuleThread } from "threads";
import { Entry } from "./internal";
import { GetUntilParams, Headers, Response } from "./internal";

export class Client {
  private _worker?: ModuleThread<Entry>;
  private _endpoints: string[];

  constructor(endpoints: string[]) {
    this._endpoints = endpoints;
  }

  async stop(): Promise<void> {
    if (typeof this._worker !== "undefined") {
      await Thread.terminate(this._worker);
    }
  }

  async getUntil(params: GetUntilParams, headers: Headers): Promise<Response> {
    await this._ensureWorkerInited();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return await this._worker!.getUntil(params, headers);
  }

  private async _ensureWorkerInited() {
    if (typeof this._worker !== "undefined") {
      return;
    }

    const worker = await spawn<Entry>(new Worker(new URL("./worker/entry.ts", import.meta.url)));
    await worker.init(this._endpoints);
    this._worker = worker;
  }
}

export default Client;
