import { AxiosPromise } from 'axios';
import client from 'lib/client';
import { register } from 'store/actions/register';
import { login } from 'store/actions/login';

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
    }).then(result => result);
}


export default {
  postRegister,
  postLogin,
}
