import { AxiosPromise } from 'axios';
import client from 'lib/client';

const getCategories = (id: string): AxiosPromise => client.get(`/categories/${id}`).then( result => result );

const getCategoriesOfProduct = (id: string): AxiosPromise => client.get(`/categories/inProduct/${id}`).then( result => result );

const getCategoriesOfDepartment = (id: string): AxiosPromise => client.get(`/categories/inDepartment/${id}`).then( result => result );

export default {
  getCategories,
  getCategoriesOfProduct,
  getCategoriesOfDepartment,
}

