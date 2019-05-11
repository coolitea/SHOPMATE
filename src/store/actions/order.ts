import {
  POST_ORDER,
  GET_ORDER_BY_CUSTOMER,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { error } from "store/models";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  postOrderRequest: (data: any) => createAction(POST_ORDER[REQUEST], data),
  postOrderSuccess: (id: number) => createAction(POST_ORDER[SUCCESS], id),
  postOrderFailure: (err: error) => createAction(POST_ORDER[FAILURE], err),
  getOrderByCustomerRequest: () =>
    createAction(GET_ORDER_BY_CUSTOMER[REQUEST]),
  getOrderByCustomerSuccess: (data: any) =>
    createAction(GET_ORDER_BY_CUSTOMER[SUCCESS], data),
  getOrderByCustomerFailure: (err: error) =>
    createAction(GET_ORDER_BY_CUSTOMER[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;
