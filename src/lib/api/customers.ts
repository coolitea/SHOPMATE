import client from "lib/client";
import { login, register } from "store/actions/types";

const postRegister = ({ name, email, password }: register) =>
  client.post(`/customers`, {
    name,
    email,
    password
  });

const postLogin = ({ email, password }: login) =>
  client.post(`/customers/login`, {
    email,
    password
  });

const getUser = () => client.get("/customer");

export default {
  postRegister,
  postLogin,
  getUser
};
