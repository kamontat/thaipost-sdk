import got, { GotJSONOptions } from "got";
import { API_LOGGER } from "../constants/logger";
import { Exception, ExceptionType } from "./error";
import { GetItemResponse, StatusType, LanguageType } from "./interface";

export class ThaiPost {
  // readonly base thaipost api link
  static get link(): string {
    return "https://trackapi.thailandpost.co.th";
  }

  public get token() {
    return this._token;
  }

  private _token?: string;
  private url: string;

  constructor(private __token: string, version: string = "v1") {
    this.url = `${ThaiPost.link}/post/api/${version}`;
  }

  async setup() {
    const url = `${this.url}/authenticate/token`;
    API_LOGGER(`Setup authentication on '${url}'`);

    const response = await got.post(url, {
      headers: {
        Authorization: `Token ${this.__token}`
      },
      json: true,
      responseType: "json",
      rejectUnauthorized: false
    } as GotJSONOptions);

    if (response.body && response.body.token) {
      this._token = response.body.token;
      API_LOGGER(`Your token will be expire on ${response.body.expire}`);
      return;
    } else {
      throw new Exception(ExceptionType.External, "cannot make authentication with your token");
    }
  }

  async getItem(_opts: { status?: StatusType; language?: LanguageType; barcode: string[] }) {
    if (!this._token) throw new Error("cannot getItem because you never setup token first");

    const opts = Object.assign({ status: "all", language: "TH" }, _opts);

    const response = await got.post(`${this.url}/track`, {
      headers: {
        Authorization: `Token ${this._token}`
      },
      body: opts,
      json: true,
      responseType: "json",
      rejectUnauthorized: false
    } as GotJSONOptions);

    return response.body as GetItemResponse;
  }
}
