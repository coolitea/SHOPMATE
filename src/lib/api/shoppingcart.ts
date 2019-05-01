import client from "lib/client";

const getGenerateId = () => client.get(`/shoppingcart/generateUniqueId`);

const getListOfProducts = (cart_id: string) =>
  client.get(`/shoppingcart/${cart_id}`);

const addToCart = (form: any) => client.post(`/shoppingcart/add`, form);

const getTotalAmount = (cart_id: string) =>
  client.get(`/shoppingcart/totalAmount/${cart_id}`);

const empyCart = (cart_id: string) =>
  client.delete(`/shoppingcart/empty/${cart_id}`);

const removeProduct = (item_id: number) =>
  client.delete(`/shoppingcart/removeProduct/${item_id}`);

const update = (item_id: number, quantity: number) =>
  client.put(`/shoppingcart/update/${item_id}`, { quantity: quantity });

export default {
  getGenerateId,
  getListOfProducts,
  addToCart,
  getTotalAmount,
  empyCart,
  removeProduct,
  update
};
