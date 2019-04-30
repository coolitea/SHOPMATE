import { GET_DEPARTMENTS, REQUEST, SUCCESS, FAILURE } from "store/constants";
import { departmentsState } from "store/models";
import { Error } from "lib/client/utils";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  departmentRequest: (id: string | null) =>
    createAction(GET_DEPARTMENTS[REQUEST], id),
  departmentSuccess: (departments: departmentsState) =>
    createAction(GET_DEPARTMENTS[SUCCESS], departments),
  departmentFailure: (err: Error) => createAction(GET_DEPARTMENTS[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;
