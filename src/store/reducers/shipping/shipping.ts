import {
  GET_SHIPPING_REGION,
  GET_SHIPPING_REGION_BY_ID,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { shippingState } from "store/models";

const initialState: shippingState = {
  shipping: [],
  region: []
};

export default function(state = initialState, action: any): shippingState {
  switch (action.type) {
    case GET_SHIPPING_REGION[REQUEST]:
      return {
        ...state
      };
    case GET_SHIPPING_REGION[SUCCESS]:
      return {
        ...state,
        shipping: action.payload
      };
    case GET_SHIPPING_REGION[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    case GET_SHIPPING_REGION_BY_ID[SUCCESS]:
      return {
        ...state,
        region: action.payload
      };
    default:
      return state;
  }
}
