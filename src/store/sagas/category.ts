import { all, fork, call, put, take } from "redux-saga/effects";
import { Catogories } from "lib/api";
import { categoryAction } from "store/actions";
import * as types from "store/constants";

export function* fetchCountries(id: string) {
  const { data, error } = yield call(Catogories.getCategories, id);
  if (data) yield put(categoryAction.categorySuccess(data));
  else yield put(categoryAction.categoryfailure(error));
}

export function* watchFetchCountries() {
  while (true) {
    const { id } = yield take(types.GET_CATEGORIES[types.REQUEST]);
    yield fork(fetchCountries, id);
  }
}

export default function*() {
  yield all([fork(watchFetchCountries)]);
}
