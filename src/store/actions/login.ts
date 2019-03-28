import { POST_LOGIN, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { customerState } from 'store/models';

let request: string, success: string, failure: string;

request = POST_LOGIN[REQUEST];
success = POST_LOGIN[SUCCESS];
failure = POST_LOGIN[FAILURE];

export interface login {
  email: string;
  password: string;
}

const loginRequest = ({ email, password }: login) => ({
  type: request,
  email,
  password,
});

const loginSuccess = (customer: customerState) => ({
  type: success,
  payload: customer,
});

const loginFailure = (err: Error) => ({
  type: failure,
  err: err.message,
});

interface loginRequestAction {
  type: typeof request;
  data: login;
}

interface loginSuccessAction {
  type: typeof success;
  payload: customerState;
}

interface loginFailureAction {
  type: typeof failure;
  err: string;
}

export type LoginActionTypes = loginRequestAction | loginSuccessAction | loginFailureAction;

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
}