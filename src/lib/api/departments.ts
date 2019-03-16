import { AxiosPromise } from 'axios';
import client from 'lib/client';

export const getDepartments = (id: string): AxiosPromise => client.get(`/departments/${id}`).then( result => result );
