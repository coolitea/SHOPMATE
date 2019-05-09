import client from "lib/client";

const getShippingRegions = () => client.get(`/shipping/regions`);

const getShippingRegionsById = (id: number) =>
  client.get(`/shipping/regions/${id}`);
  
export default {
  getShippingRegions,
  getShippingRegionsById
};
