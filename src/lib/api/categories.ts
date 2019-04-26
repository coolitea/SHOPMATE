import { AxiosPromise } from "axios";
import client from "lib/client/utils";

const getCategories = (id: string): any => client.get(`/categories/${id}`);

const getCategoriesOfProduct = (id: string): any =>
  client.get(`/categories/inProduct/${id}`);

const getCategoriesOfDepartment = (id: string): any =>
  client.get(`/categories/inDepartment/${id}`);

export default {
  getCategories,
  getCategoriesOfProduct,
  getCategoriesOfDepartment
};
