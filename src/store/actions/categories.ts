import { GET_CATEGORIES, REQUEST, SUCCESS, FAILURE } from "store/constants";
import { categoriesState } from "store/models";
import { Error } from "lib/client";
import { ActionsUnion } from "./types";
import { createAction } from "./action-helpers";

export const Actions = {
  categoryRequest: (id: string | null) =>
    createAction(GET_CATEGORIES[REQUEST], id),
  categorySuccess: (categories: categoriesState) =>
    createAction(GET_CATEGORIES[SUCCESS], categories),
  categoryFailure: (err: Error) => createAction(GET_CATEGORIES[FAILURE], err)
};

export type Actions = ActionsUnion<typeof Actions>;
