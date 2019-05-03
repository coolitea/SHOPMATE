import {
  GET_ATTRIBUTES_WITH_PRODUCTID,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { attribute, error } from "store/models";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  attributeRequest: (id: string) =>
    createAction(GET_ATTRIBUTES_WITH_PRODUCTID[REQUEST], id),
  attributeSuccess: (detail: attribute) =>
    createAction(GET_ATTRIBUTES_WITH_PRODUCTID[SUCCESS], detail),
  attributeFailure: (err: error) =>
    createAction(GET_ATTRIBUTES_WITH_PRODUCTID[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;
