import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

import storage from "lib/storage";

export interface Error {
  code: number;
  field: string;
  message: string;
  status: number;
}

class utils {
  private axios: AxiosInstance;
  private loginResolve: () => void;
  public isLoggedIn: () => boolean;
  private authUserHeader: () => object;
  public loginChain: Promise<any>;

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
    this.loginResolve = () => "";
    this.loginChain = new Promise(resolve => {
      this.loginResolve = resolve;
    });
  }

  handleError = (error: AxiosError): Promise<Error> => {
    const errResponse =
      error.response && error.response.data
        ? error.response.data.error
        : {
            code: error.code,
            field: "",
            message: error.message,
            status: error.code
          };
    return Promise.reject(errResponse);
  };

  get(path: string, payload = null as any) {
    return this.axios
      .get(path, payload)
      .then((result: AxiosResponse) => result)
      .catch(this.handleError);
  }

  post(path: string, payload: any) {
    return this.axios
      .post(path, payload)
      .then((result: AxiosResponse) => result)
      .catch(this.handleError);
  }

  put(path: string, payload: any) {
    return this.axios
      .post(path, payload)
      .then((result: AxiosResponse) => result.data || result)
      .catch(this.handleError);
  }

  authGet(path: string, payload: any): Promise<any> {
    return this.loginChain
      .then(() => this.get(path, payload))
      .catch(this.handleError);
  }

  authPost(path: string, payload: any): Promise<any> {
    return this.loginChain
      .then(() => this.get(path, payload))
      .catch(this.handleError);
  }

  authPut(path: string, payload: any): Promise<any> {
    return this.loginChain
      .then(() => this.get(path, payload))
      .catch(this.handleError);
  }
}

const client = new utils();

export default client;
