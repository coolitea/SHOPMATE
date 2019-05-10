import {
  GET_ORDER_BY_CUSTOMER,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { orderState } from "store/models";

const initialState: orderState = {
  order: []
};

export default function(state = initialState, action: any): orderState {
  switch (action.type) {
    case GET_ORDER_BY_CUSTOMER[SUCCESS]:
      return {
        ...state,
        order: action.payload
      };
    case GET_ORDER_BY_CUSTOMER[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
