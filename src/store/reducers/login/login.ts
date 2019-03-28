import { POST_LOGIN, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { customerState } from 'store/models';
import { LoginActionTypes } from 'store/actions/login';

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
        customer: action.payload.customer,
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