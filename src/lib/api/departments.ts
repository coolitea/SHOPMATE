import { AxiosPromise } from "axios";
import client from "lib/client/utils";

export const getDepartments = (id: string): any =>
  client.get(`/departments/${id}`);
