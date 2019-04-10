import { all, fork, call, put, take } from 'redux-saga/effects';
import { Customers } from 'lib/api';
import { authAction } from 'store/actions';
import * as types from 'store/constants';
import { login, register } from 'store/actions/auth';
import storage from 'lib/storage';

export function* fetchLogin({ email, password }: login) {
  try {
    const { data } = yield call(Customers.postLogin, {
      email,
      password,
    });
    yield storage.set('Authorization', data.accessToken);
    yield put(authAction.loginSuccess(data));
    // yield (location.href = '/');
  } catch (error) {
    yield put(authAction.loginFailure(error));
  }
}

export function* fetchRegister({ email, password, name }: register) {
  try {
    const { data } = yield call(Customers.postRegister, {
      email,
      password,
      name
    });
    yield storage.set('Authorization', data.accessToken);
    yield put(authAction.registerSuccess(data));
    // yield (location.href = '/');
  } catch (error) {
    yield put(authAction.registerFailure(error));
  }
}

export function* watchFetchLogin() {
  while (true) {
    const { email, password } = yield take(types.POST_LOGIN[types.REQUEST]);
    yield fork(fetchLogin, { email, password });
  }
}

export function* watchFetchRegister() {
  while (true) {
    const { email, password, name } = yield take(types.POST_REGISTER[types.REQUEST]);
    yield fork(fetchRegister, { email, password, name });
  }
}

export default function* () {
  yield all([
    fork(watchFetchLogin),
    fork(watchFetchRegister),
  ]);
}
