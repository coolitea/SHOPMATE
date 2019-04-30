import {
  POST_LOGIN,
  POST_REGISTER,
  GET_USER,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { customerState } from "store/models";
import { Error } from "lib/client";

export interface login {
  email: string;
  password: string;
}

export interface register extends login {
  name: string;
}
// GET USER
const getUserRequest = () => ({
  type: GET_USER[REQUEST]
});

const getUserSuccess = (customer: customerState) => ({
  type: GET_USER[SUCCESS],
  payload: customer
});

const getUserFailure = (err: Error) => ({
  type: GET_USER[FAILURE],
  err
});

interface getUserRequestAction {
  type: typeof GET_USER["REQUEST"];
}

interface getUserSuccessAction {
  type: typeof GET_USER["SUCCESS"];
  payload: customerState;
}

interface getUserFailureAction {
  type: typeof GET_USER["FAILURE"];
  err: Error;
}

// LOGIN
const loginRequest = ({ email, password }: login) => ({
  type: POST_LOGIN[REQUEST],
  email,
  password
});

const loginSuccess = (customer: customerState) => ({
  type: POST_LOGIN[SUCCESS],
  payload: customer
});

const loginFailure = (err: Error) => ({
  type: POST_LOGIN[FAILURE],
  err
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
  name
});

const registerSuccess = (customer: customerState) => ({
  type: POST_REGISTER[SUCCESS],
  payload: customer
});

const registerFailure = (err: Error) => ({
  type: POST_REGISTER[FAILURE],
  err: err
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

export type LoginActionTypes =
  | loginRequestAction
  | loginSuccessAction
  | loginFailureAction;

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  getUserRequest,
  getUserSuccess,
  getUserFailure
};
