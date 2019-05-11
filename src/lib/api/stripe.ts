import client from "lib/client";

const chage = (data: any) => client.post(`/stripe/charge`, data);

export default {
  chage
};
