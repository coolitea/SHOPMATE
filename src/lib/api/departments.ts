import client from "lib/client";

export const getDepartments = (id: string): any =>
  client.get(`/departments/${id}`);
