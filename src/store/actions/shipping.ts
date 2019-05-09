import {
  GET_SHIPPING_REGION,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { shipping, error } from "store/models";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  getShippingRequest: () => createAction(GET_SHIPPING_REGION[REQUEST]),
  getShippingSuccess: (shipping: shipping) =>
    createAction(GET_SHIPPING_REGION[SUCCESS], shipping),
  getShippingFailure: (err: error) =>
    createAction(GET_SHIPPING_REGION[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;
