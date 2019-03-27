import { POST_REGISTER, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { customerState } from 'store/models';
import { RegisterActionTypes } from 'store/actions/register';

const initialState: customerState = {};

export default function(state = initialState, action: any): customerState {
  switch (action.type) {
    case POST_REGISTER[REQUEST]:
      return {
        ...initialState,
      };
    case POST_REGISTER[SUCCESS]:
      return {
        ...initialState,
        customer: action.payload,
      };
    case POST_REGISTER[FAILURE]:
      return {
        ...initialState,
        error: action.err,
      };
    default:
      return state;
  }
}