import client from "lib/client/utils";

const getGenerateId = () => {
  return client.get(`/shoppingcart/generateUniqueId`);
};

export default {
  getGenerateId
};
