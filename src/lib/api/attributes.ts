import client from "lib/client";

const getAttributeByProductId = (id: string) =>
  client.get(`/attributes/inProduct/${id}`);

export default {
  getAttributeByProductId
};
