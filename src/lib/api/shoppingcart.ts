import client from "lib/client/utils";

const getGenerateId = () => client.get(`/shoppingcart/generateUniqueId`);

const getListOfProducts = (cart_id: string) =>
  client.get(`/shoppingcart/${cart_id}`);

const addToCart = (form: any) => client.post(`/shoppingcart/add`, form);

const getTotalAmount = (cart_id: string) => client.get(`/shoppingcart/totalAmount/${cart_id}`);

export default {
  getGenerateId,
  getListOfProducts,
  addToCart,
  getTotalAmount
};
