import { 
  POST_LOGIN,
  POST_REGISTER,
  REQUEST,
  SUCCESS,
  FAILURE } from 'store/constants';
import { customerState } from 'store/models';

const initialState: customerState = {};

export default function(state = initialState, action: any): customerState {
  switch (action.type) {
    case POST_LOGIN[REQUEST]:
      return {
        ...initialState,
      };
    case POST_LOGIN[SUCCESS]:
      return {
        ...initialState,
        user: action.payload.user,
      };
    case POST_REGISTER[SUCCESS]:
      return {
        ...initialState,
        user: action.payload.user,
      };
    case POST_LOGIN[FAILURE]:
      return {
        ...initialState,
        error: action.err,
      };
    default:
      return state;
  }
}