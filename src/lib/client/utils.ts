import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
} from 'axios';

export interface Error {
  code: number;
  field: string;
  message: string;
  status: number;
}

class utils {
  private token: string;
  private axios: AxiosInstance;
  private loginResolve: () => void;
  public loginChain: Promise<any>;

  constructor() {
    this.token = '';
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
    });
    this.loginResolve = () => '';
    this.loginChain = new Promise((resolve) => {
      this.loginResolve = resolve;
    });
  };

  auth(token: string) {
    this.token = token;
    this.axios.defaults.headers.common['user-key'] = token;
    if (token) {
      this.loginResolve();
      this.loginResolve = () => '';
      this.loginChain = Promise.resolve(token);
    } else {
      this.loginChain = new Promise((resolve) => {
        this.loginResolve = resolve;
      });
    };
  };

  isAuthorized() {
    return !!this.token;
  }

  handleError = (error: AxiosError): Promise<Error> => {
    const errResponse =
      error.response && error.response.data
        ? error.response.data.error
        : {
          code: error.code,
          field: '',
          message: error.message,
          status: error.code,
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
      .then((result: AxiosResponse) => result )
      .catch(this.handleError);
  }

  put(path: string, payload: any) {
    return this.axios
    .post(path, payload)
    .then((result: AxiosResponse) => result.data || result)
    .catch(this.handleError);
  }

  authGet(path: string, payload: any): Promise<any>{
    return this.loginChain
      .then(()=> this.get(path, payload))
      .catch(this.handleError);
  }

  authPost(path: string, payload: any): Promise<any>{
    return this.loginChain
      .then(()=> this.get(path, payload))
      .catch(this.handleError);
  }

  authPut(path: string, payload: any): Promise<any>{
    return this.loginChain
      .then(()=> this.get(path, payload))
      .catch(this.handleError);
  }
}

const client = new utils();

export default client;