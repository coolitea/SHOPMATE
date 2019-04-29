import {
  GET_GENERATE_CART_ID,
  GET_LIST_OF_CART,
  POST_ADD_PRODUCT,
  GET_TOTAL_AMOUNT,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { cart } from "store/models";

const generateCartRequest = () => ({
  type: GET_GENERATE_CART_ID[REQUEST]
});

const generateCartSuccess = (id: string) => ({
  type: GET_GENERATE_CART_ID[SUCCESS],
  payload: id
});

const generateCartFailure = (err: Error) => ({
  type: GET_GENERATE_CART_ID[FAILURE],
  err: err
});

const listCartRequest = () => ({
  type: GET_LIST_OF_CART[REQUEST]
});

const listCartSuccess = (cart: cart[]) => ({
  type: GET_LIST_OF_CART[SUCCESS],
  payload: cart
});

const listCartFailure = (err: Error) => ({
  type: GET_LIST_OF_CART[FAILURE],
  err: err
});

const addToCartRequest = (payload: any) => ({
  type: POST_ADD_PRODUCT[REQUEST],
  payload
});

const addToCartSuccess = (payload: any) => ({
  type: POST_ADD_PRODUCT[SUCCESS],
  payload
});

const addToCartFailure = (err: Error) => ({
  type: POST_ADD_PRODUCT[FAILURE],
  err: err
});

const totalAmountRequest = () => ({
  type: GET_TOTAL_AMOUNT[REQUEST],
});

const totalAmountSuccess = (payload: any) => ({
  type: GET_TOTAL_AMOUNT[SUCCESS],
  payload
});

const totalAmountFailure = (err: Error) => ({
  type: GET_TOTAL_AMOUNT[FAILURE],
  err: err
});

export default {
  generateCartRequest,
  generateCartSuccess,
  generateCartFailure,
  listCartRequest,
  listCartSuccess,
  listCartFailure,
  addToCartRequest,
  addToCartSuccess,
  addToCartFailure,
  totalAmountRequest,
  totalAmountSuccess,
  totalAmountFailure
};
