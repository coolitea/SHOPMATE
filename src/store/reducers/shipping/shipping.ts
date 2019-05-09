import {
  GET_SHIPPING_REGION,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { shippingState } from "store/models";

const initialState: shippingState = {
  shipping: []
};

export default function(state = initialState, action: any): shippingState {
  switch (action.type) {
    case GET_SHIPPING_REGION[REQUEST]:
      return {
        ...state
      };
    case GET_SHIPPING_REGION[SUCCESS]:
      const { payload } = action;
      return {
        ...state,
        shipping: payload
      };
    case GET_SHIPPING_REGION[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
