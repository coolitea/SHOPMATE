import { 
  POST_LOGIN,
  POST_REGISTER,
  REQUEST,
  SUCCESS,
  FAILURE } from 'store/constants';
import { customerState } from 'store/models';
import { Error } from 'lib/client/utils';
export interface login {
  email: string;
  password: string;
}

export interface register extends login {
  name: string;
}
// LOGIN
const loginRequest = ({ email, password }: login) => ({
  type: POST_LOGIN[REQUEST],
  email,
  password,
});

const loginSuccess = (customer: customerState) => ({
  type: POST_LOGIN[SUCCESS],
  payload: customer,
});

const loginFailure = (err: Error) => ({
  type: POST_LOGIN[FAILURE],
  err,
});

interface loginRequestAction {
  type: typeof POST_LOGIN["REQUEST"];
  data: login;
}

interface loginSuccessAction {
  type: typeof POST_LOGIN["SUCCESS"];
  payload: customerState;
}

interface loginFailureAction {
  type: typeof POST_LOGIN["FAILURE"];
  err: Error;
}

// REGISTER
const registerRequest = ({ email, password, name }: register) => ({
  type: POST_REGISTER[REQUEST],
  email,
  password,
  name,
});

const registerSuccess = (customer: customerState) => ({
  type: POST_REGISTER[SUCCESS],
  payload: customer,
});

const registerFailure = (err: Error) => ({
  type: POST_REGISTER[FAILURE],
  err: err,
});

interface registerRequestAction {
  type: typeof POST_REGISTER["REQUEST"];
  data: register;
}

interface registerSuccessAction {
  type: typeof POST_REGISTER["SUCCESS"];
  payload: customerState;
}

interface registerFailureAction {
  type: typeof POST_REGISTER["FAILURE"];
  err: Error;
}

export type LoginActionTypes = loginRequestAction | loginSuccessAction | loginFailureAction;

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
}