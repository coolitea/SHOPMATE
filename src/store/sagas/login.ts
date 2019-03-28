import { all, fork, call, put, take } from 'redux-saga/effects';
import { Customers } from 'lib/api';
import { registerAction } from 'store/actions';
import * as types from 'store/constants';
import { login } from 'store/actions/login';
import storage from 'lib/storage';

export function* fetchLogin({ email, password }: login) {
  try {
    const { data } = yield call(Customers.postLogin, {
      email,
      password,
    });
    yield storage.set('Authorization', data.accessToken);
    yield put(registerAction.registerSuccess(data));
    yield (location.href = '/');
  } catch (error) {
    yield put(registerAction.registerFailure(error));
  }
}

export function* watchFetchLogin() {
  while (true) {
    const { email, password } = yield take(types.POST_LOGIN[types.REQUEST]);
    yield fork(fetchLogin, { email, password });
  }
}

export default function* () {
  yield all([fork(watchFetchLogin)]);
}
