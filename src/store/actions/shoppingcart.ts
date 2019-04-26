import {
  GET_GENERATE_CART_ID,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { cartState } from "store/models";

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

export default {
  generateCartRequest,
  generateCartSuccess,
  generateCartFailure
};
