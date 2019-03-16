import { all, fork, call, put, take } from 'redux-saga/effects';
import * as api from 'lib/api';
import { departmentAction } from 'store/actions';
import * as types from 'store/constants';

export function* fetchCountries(id: string) {
  try {
    const { data } = yield call(api.getDepartments, id);
    yield put(departmentAction.departmentSuccess(data));
  } catch (error) {
    yield put(departmentAction.departmentfailure(error));
  }
}

export function* watchFetchCountries() {
  while (true) {
    const { id } = yield take(types.GET_DEPARTMENTS[types.REQUEST]);
    yield fork(fetchCountries, id);
  }
}

export default function* () {
  yield all([fork(watchFetchCountries)]);
}
