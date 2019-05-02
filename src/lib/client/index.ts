import axios, { AxiosInstance, AxiosResponse } from "axios";

import storage from "lib/storage";

export interface Error {
  code: number;
  field: string;
  message: string;
  status: number;
}

class Client {
  private axios: AxiosInstance;
  public isLoggedIn: () => boolean;
  private authUserHeader: () => object;

  constructor() {
    this.isLoggedIn = () => !!storage.get("USER-KEY");
    this.authUserHeader = () => {
      const user = storage.get("USER-KEY");
      if (this.isLoggedIn()) {
        return {
          "USER-KEY": user || {}
        };
      }
      return {};
    };
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
      headers: {
        "Content-Type": "application/json",
        ...this.authUserHeader()
      }
    });
  }

  get(path: string, payload = null as any) {
    return this.axios
      .get(path, payload)
      .then((response: AxiosResponse) => response );
  }

  post(path: string, payload: any) {
    return this.axios
      .post(path, payload)
      .then((response: AxiosResponse) => response);
  }

  put(path: string, payload: any) {
    return this.axios
      .put(path, payload)
      .then((result: AxiosResponse) => result);
  }

  delete(path: string, payload = null as any) {
    return this.axios
      .delete(path, payload)
      .then((result: AxiosResponse) => result);
  }
}

const client = new Client();

export default client;
