import { call, put, takeLatest } from "redux-saga/effects";
import { Catogories } from "lib/api";
import { categoryAction } from "store/actions";
import * as types from "store/constants";

export function* fetchCategories(action: any) {
  const { data, error } = yield call(Catogories.getCategories, action.payload);
  if (data) yield put(categoryAction.categorySuccess(data));
  else yield put(categoryAction.categoryFailure(error));
}

export default function* watchCategories() {
  yield takeLatest(types.GET_CATEGORIES[types.REQUEST], fetchCategories);
}

