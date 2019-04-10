import { 
  POST_LOGIN,
  POST_REGISTER,
  GET_USER,
  REQUEST,
  SUCCESS,
  FAILURE } from 'store/constants';
import { customerState } from 'store/models';

const initialState: customerState = {};

export default function(state = initialState, action: any): customerState {
  switch (action.type) {
    case POST_LOGIN[REQUEST]:
      return {
        ...state,
      };
    case POST_LOGIN[SUCCESS]:
      return {
        ...state,
      };
    case POST_REGISTER[SUCCESS]:
      return {
        ...state,
      };
    case GET_USER[SUCCESS]:
      return {
        ...state,
        user: action.payload,
      }
    case POST_LOGIN[FAILURE]:
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
}