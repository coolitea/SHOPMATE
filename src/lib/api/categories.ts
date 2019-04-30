import client from "lib/client";

const getCategories = (id: string) => client.get(`/categories/${id}`);

const getCategoriesOfProduct = (id: string) =>
  client.get(`/categories/inProduct/${id}`);

const getCategoriesOfDepartment = (id: string) =>
  client.get(`/categories/inDepartment/${id}`);

export default {
  getCategories,
  getCategoriesOfProduct,
  getCategoriesOfDepartment
};
