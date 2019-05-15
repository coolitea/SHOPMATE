import client from "lib/client";

const chage = (data: any) => {
  return client.post(`/stripe/charge`, data);
}

export default {
  chage
};
