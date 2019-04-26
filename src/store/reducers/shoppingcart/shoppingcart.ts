import {
  GET_GENERATE_CART_ID,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { cartState, cart } from "store/models";

const initialState: cartState = {
  cart_id: "",
  cart: []
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
        cart_id: action.payload
      };
    case GET_GENERATE_CART_ID[FAILURE]:
      return {
        ...state,
        err: action.err
      };
    default:
      return state;
  }
}
