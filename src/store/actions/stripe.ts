import {
  POST_CHARGE,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { error } from "store/models";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  postChargeRequest: (data: any) => createAction(POST_CHARGE[REQUEST], data),
  postChargeSuccess: (data: any) =>
    createAction(POST_CHARGE[SUCCESS], data),
  postChargeFailure: (err: error) =>
    createAction(POST_CHARGE[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;