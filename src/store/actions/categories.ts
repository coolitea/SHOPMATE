import { GET_CATEGORIES, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { categoriesState } from 'store/models';

let request: string, success: string, failure: string;

request = GET_CATEGORIES[REQUEST];
success = GET_CATEGORIES[SUCCESS];
failure = GET_CATEGORIES[FAILURE];


const categoryRequest = (id: string | null) => ({
  type: request,
  id,
});

const categorySuccess = (categories: categoriesState) => ({
  type: success,
  payload: categories,
});

const categoryfailure = (err: Error) => ({
  type: failure,
  err: err.message,
});

interface categoryRequestAction {
  type: typeof request;
  url: string;
}

interface categorySuccessAction {
  type: typeof success;
  payload: categoriesState;
}

interface categoryFailureAction {
  type: typeof failure;
  err: string;
}

export type CategoryActionTypes = categoryRequestAction | categorySuccessAction | categoryFailureAction;

export default {
  categoryRequest,
  categorySuccess,
  categoryfailure,
}