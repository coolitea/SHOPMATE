import {
  GET_GENERATE_CART_ID,
  GET_LIST_OF_CART,
  POST_ADD_PRODUCT,
  GET_TOTAL_AMOUNT,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { cartState, cart } from "store/models";

const initialState: cartState = {
  cart: [],
  total_amount: '0',
};

export default function(state = initialState, action: any): cartState {
  switch (action.type) {
    case GET_GENERATE_CART_ID[REQUEST]:
      return {
        ...state
      };
    case GET_GENERATE_CART_ID[SUCCESS]:
      return {
        ...state,
      };
    case GET_GENERATE_CART_ID[FAILURE]:
      return {
        ...state,
        err: action.err
      };
    case GET_LIST_OF_CART[REQUEST]:
      return {
        ...state
      };
    case GET_LIST_OF_CART[SUCCESS]:
      return {
        ...state,
        cart: action.payload
      };
    case GET_LIST_OF_CART[FAILURE]:
      return {
        ...state,
        err: action.err
      };
    case POST_ADD_PRODUCT[REQUEST]:
      return {
        ...state
      };
    case POST_ADD_PRODUCT[SUCCESS]:
      return {
        ...state,
        cart: action.payload
      };
    case POST_ADD_PRODUCT[FAILURE]:
      return {
        ...state,
        err: action.err
      };
    case GET_TOTAL_AMOUNT[REQUEST]:
      return {
        ...state
      };
    case GET_TOTAL_AMOUNT[SUCCESS]:
      return {
        ...state,
        total_amount: action.payload.total_amount
      };
    case GET_TOTAL_AMOUNT[FAILURE]:
      return {
        ...state,
        err: action.err
      };
    default:
      return state;
  }
}
