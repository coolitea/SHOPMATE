import { AxiosPromise } from 'axios';
import client from 'lib/client';

const getAttributeByProductId = (id: string): AxiosPromise => client.get(`/attributes/inProduct/${id}`).then( result => result );

export default {
  getAttributeByProductId,
}
