import { AxiosPromise } from 'axios';
import client from 'lib/client';
import { register } from 'store/actions/register';

const postRegister = ({
  name,
  email,
  password,
}: register): AxiosPromise =>{
  return client
    .post(`/customers`, {
      name,
      email,
      password,
    }).then( result => result );
  }



export default {
  postRegister,
}
