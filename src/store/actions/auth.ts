import {
  POST_LOGIN,
  POST_REGISTER,
  GET_USER,
  PUT_UPDATE_USER,
  REQUEST,
  SUCCESS
} from "store/constants";
import { customerState } from "store/models";
import { ActionsUnion, login, register } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  getUserRequest: () => createAction(GET_USER[REQUEST]),
  getUserSuccess: (customer: customerState) =>
    createAction(GET_USER[SUCCESS], customer),
  loginRequest: (data: login) => createAction(POST_LOGIN[REQUEST], data),
  registerRequest: (data: register) =>
    createAction(POST_REGISTER[REQUEST], data),
  putUserRequest: (data: any) => createAction(PUT_UPDATE_USER[REQUEST], data),
  putUserSuccess: (data: any) => createAction(PUT_UPDATE_USER[SUCCESS], data),
};

export type Actions = ActionsUnion<typeof Actions>;
