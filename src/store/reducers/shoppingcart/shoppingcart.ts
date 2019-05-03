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
import { cartState, cart } from "store/models";

const initialState: cartState = {
  cart: [],
  total_amount: '0',
  total_items: 0
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
        err: action.payload
      };
    case GET_LIST_OF_CART[REQUEST]:
      return {
        ...state
      };
    case GET_LIST_OF_CART[SUCCESS]:
      return {
        ...state,
        cart: action.payload,
        total_items: action.payload.reduce((accumulator: number, current: cart) => {
          return accumulator += current.quantity;
        },0)
      };
    case GET_LIST_OF_CART[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    case POST_ADD_PRODUCT[REQUEST]:
      return {
        ...state
      };
    case POST_ADD_PRODUCT[SUCCESS]:
      return {
        ...state,
        cart: action.payload,
        total_items: action.payload.reduce((accumulator: number, current: cart) => {
          return accumulator += current.quantity;
        },0)
      };
    case POST_ADD_PRODUCT[FAILURE]:
      return {
        ...state,
        err: action.payload
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
        err: action.payload
      };
    case DELETE_EMPTY_CART[REQUEST]:
      return {
        ...state
      };
    case DELETE_EMPTY_CART[SUCCESS]:
      return {
        ...state,
        cart: action.payload
      };
    case DELETE_EMPTY_CART[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    case DELETE_PRODUCT_IN_CART[REQUEST]:
      return {
        ...state
      };
    case DELETE_PRODUCT_IN_CART[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    case PUT_UPDATE_CART[REQUEST]:
      return {
        ...state
      };
    case PUT_UPDATE_CART[SUCCESS]:
      return {
        ...state,
        cart: action.payload,
        total_items: action.payload.reduce((accumulator: number, current: cart) => {
          return accumulator += current.quantity;
        },0)
      };
    case PUT_UPDATE_CART[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
