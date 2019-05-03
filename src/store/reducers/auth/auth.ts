import {
  POST_LOGIN,
  POST_REGISTER,
  GET_USER,
  PUT_UPDATE_ADDRESS,
  PUT_UPDATE_PHONE,
  REQUEST,
  SUCCESS
} from "store/constants";
import { customerState } from "store/models";

const initialState: customerState = {};

export default function(state = initialState, action: any): customerState {
  switch (action.type) {
    case POST_LOGIN[REQUEST]:
      return {
        ...state
      };
    case POST_LOGIN[SUCCESS]:
      return {
        ...state
      };
    case POST_REGISTER[SUCCESS]:
      return {
        ...state
      };
    case GET_USER[SUCCESS]:
      return {
        ...state,
        user: action.payload
      };
    case PUT_UPDATE_PHONE[SUCCESS]:
      return {
        ...state,
        user: action.payload
      };
    case PUT_UPDATE_ADDRESS[SUCCESS]:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
