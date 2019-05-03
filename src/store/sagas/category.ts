import { call, put, takeLatest } from "redux-saga/effects";
import { Catogories } from "lib/api";
import { categoryAction } from "store/actions";
import * as types from "store/constants";

export function* fetchCategories({ payload }: any) {
  try {
    const { data } = yield call(Catogories.getCategories, payload);
    yield put(categoryAction.categorySuccess(data));
  }
  catch(error) {
    yield put(categoryAction.categoryFailure(error));
  }
}

export default function* watchCategories() {
  yield takeLatest(types.GET_CATEGORIES[types.REQUEST], fetchCategories);
}
