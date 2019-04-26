import { AxiosPromise } from "axios";
import client from "lib/client/utils";
import { login, register } from "store/actions/auth";

const postRegister = ({ name, email, password }: register): any => {
  return client.post(`/customers`, {
    name,
    email,
    password
  });
};

const postLogin = ({ email, password }: login): any => {
  return client.post(`/customers/login`, {
    email,
    password
  });
};

const getUser = () => {
  return client.get("/customer");
};

export default {
  postRegister,
  postLogin,
  getUser
};
