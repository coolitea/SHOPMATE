import { POST_REGISTER, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { customerState } from 'store/models';

let request: string, success: string, failure: string;

request = POST_REGISTER[REQUEST];
success = POST_REGISTER[SUCCESS];
failure = POST_REGISTER[FAILURE];

export interface register {
  name: string;
  email: string;
  password: string;
}

const registerRequest = ({ name, email, password }: register) => ({
  type: request,
  name,
  email,
  password,
});

const registerSuccess = (customer: customerState) => ({
  type: success,
  payload: customer,
});

const registerFailure = (err: Error) => ({
  type: failure,
  err: err.message,
});

interface registerRequestAction {
  type: typeof request;
  data: register;
}

interface registerSuccessAction {
  type: typeof success;
  payload: customerState;
}

interface registerFailureAction {
  type: typeof failure;
  err: string;
}

export type RegisterActionTypes = registerRequestAction | registerSuccessAction | registerFailureAction;

export default {
  registerRequest,
  registerSuccess,
  registerFailure,
}