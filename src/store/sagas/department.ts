import { all, fork, call, put, take } from "redux-saga/effects";
import * as api from "lib/api";
import { departmentAction } from "store/actions";
import * as types from "store/constants";

export function* fetchCountries(id: string) {
  const { data, error } = yield call(api.getDepartments, id);
  if (data) yield put(departmentAction.departmentSuccess(data));
  else yield put(departmentAction.departmentfailure(error));
}

export function* watchFetchCountries() {
  while (true) {
    const { id } = yield take(types.GET_DEPARTMENTS[types.REQUEST]);
    yield fork(fetchCountries, id);
  }
}

export default function*() {
  yield all([fork(watchFetchCountries)]);
}
