import client from "lib/client";

const postOrder = (data: any) => client.post(`/orders`, data);
const getOrderByCustomer = () => client.get(`/orders/inCustomer`);

export default {
  postOrder,
  getOrderByCustomer
};
