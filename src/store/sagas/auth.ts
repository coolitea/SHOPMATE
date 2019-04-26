import {
  all,
  fork,
  call,
  put,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { Customers } from "lib/api";
import { authAction } from "store/actions";
import * as types from "store/constants";
import { login, register } from "store/actions/auth";
import storage from "lib/storage";

export function* fetchLogin({ email, password }: login) {
  const response = yield call(Customers.postLogin, {
    email,
    password
  });
  if (response) {
    yield storage.set("USER-KEY", response.data.accessToken);
    yield put(authAction.loginSuccess(response.data));
    yield (location.href = "/");
  } else yield put(authAction.loginFailure(response.error));
}

export function* fetchRegister({ email, password, name }: register) {
  const response = yield call(Customers.postRegister, {
    email,
    password,
    name
  });
  if (response) {
    yield storage.set("USER-KEY", response.data.accessToken);
    yield put(authAction.registerSuccess(response.data));
    yield (location.href = "/");
  } else yield put(authAction.registerFailure(response.error));
}

export function* fetchUser() {
  const { data, error } = yield call(Customers.getUser);
  if (data) {
    yield put(authAction.getUserSuccess(data));
  } else yield put(authAction.getUserFailure(error));
}

export function* watchFetchLogin() {
  while (true) {
    const { email, password } = yield take(types.POST_LOGIN[types.REQUEST]);
    yield fork(fetchLogin, { email, password });
  }
}

export function* watchFetchRegister() {
  while (true) {
    const { email, password, name } = yield take(
      types.POST_REGISTER[types.REQUEST]
    );
    yield fork(fetchRegister, { email, password, name });
  }
}

export function* watchFetchgetUser() {
  // while(true) {
  yield takeLatest(types.GET_USER[types.REQUEST], fetchUser);
  // }
}

export default function*() {
  yield all([
    fork(watchFetchLogin),
    fork(watchFetchRegister),
    fork(watchFetchgetUser)
  ]);
}
