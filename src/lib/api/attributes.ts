
import client from "lib/client/utils";

const getAttributeByProductId = (id: string): any =>
  client.get(`/attributes/inProduct/${id}`);

export default {
  getAttributeByProductId
};
