import { AxiosPromise } from 'axios';
import client from 'lib/client';
import { login, register } from 'store/actions/auth';

const postRegister = ({
  name,
  email,
  password,
}: register): AxiosPromise => {
  return client
    .post(`/customers`, {
      name,
      email,
      password,
    }).then(result => result);
}

const postLogin = ({
  email,
  password,
}: login): AxiosPromise => {
  return client
    .post(`/customers/login`, {
      email,
      password,
    })
    .then(result => result);
}


export default {
  postRegister,
  postLogin,
}
