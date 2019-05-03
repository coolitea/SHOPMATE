import {
  POST_LOGIN,
  POST_REGISTER,
  GET_USER,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { customerState, error } from "store/models";
import { ActionsUnion, login, register } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  getUserRequest: () => createAction(GET_USER[REQUEST]),
  getUserSuccess: (customer: customerState) =>
    createAction(GET_USER[SUCCESS], customer),
  loginRequest: (data: login) => createAction(POST_LOGIN[REQUEST], data),
  registerRequest: (data: register) =>
    createAction(POST_REGISTER[REQUEST], data)
};

export type Actions = ActionsUnion<typeof Actions>;
