import {
  GET_GENERATE_CART_ID,
  GET_LIST_OF_CART,
  POST_ADD_PRODUCT,
  GET_TOTAL_AMOUNT,
  DELETE_EMPTY_CART,
  DELETE_PRODUCT_IN_CART,
  PUT_UPDATE_CART,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { cart } from "store/models";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  generateCartRequest: () => createAction(GET_GENERATE_CART_ID[REQUEST]),
  generateCartSuccess: (id: string) =>
    createAction(GET_GENERATE_CART_ID[SUCCESS], id),
  generateCartFailure: (err: Error) =>
    createAction(GET_GENERATE_CART_ID[FAILURE], err),
  listCartRequest: () => createAction(GET_LIST_OF_CART[REQUEST]),
  listCartSuccess: (cart: cart[]) =>
    createAction(GET_LIST_OF_CART[SUCCESS], cart),
  listCartFailure: (err: Error) => createAction(GET_LIST_OF_CART[FAILURE], err),
  addToCartRequest: (payload: any) =>
    createAction(POST_ADD_PRODUCT[REQUEST], payload),
  addToCartSuccess: (payload: any) =>
    createAction(POST_ADD_PRODUCT[SUCCESS], payload),
  addToCartFailure: (err: Error) =>
    createAction(POST_ADD_PRODUCT[FAILURE], err),
  totalAmountRequest: () => createAction(GET_TOTAL_AMOUNT[REQUEST]),
  totalAmountSuccess: (payload: any) =>
    createAction(GET_TOTAL_AMOUNT[SUCCESS], payload),
  totalAmountFailure: (err: Error) =>
    createAction(GET_TOTAL_AMOUNT[FAILURE], err),
  empyCartRequest: () => createAction(DELETE_EMPTY_CART[REQUEST]),
  empyCartSuccess: (payload: any) =>
    createAction(DELETE_EMPTY_CART[SUCCESS], payload),
  empyCartFailure: (err: Error) => createAction(DELETE_EMPTY_CART[FAILURE], err),
  removeProductRequest: (item_id: number) => createAction(DELETE_PRODUCT_IN_CART[REQUEST],item_id),
  removeProductSuccess: () =>
    createAction(DELETE_PRODUCT_IN_CART[SUCCESS]),
  removeProductFailure: (err: Error) => createAction(DELETE_PRODUCT_IN_CART[FAILURE], err),
  updateRequest: (form: any) => createAction(PUT_UPDATE_CART[REQUEST],form),
  updateSuccess: (data: cart) =>
    createAction(PUT_UPDATE_CART[SUCCESS], data),
  updateFailure: (err: Error) => createAction(PUT_UPDATE_CART[FAILURE], err),

};

export type Actions = ActionsUnion<typeof Actions>;
