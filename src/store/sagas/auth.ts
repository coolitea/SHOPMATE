import { all, fork, call, put, take, takeLatest } from "redux-saga/effects";
import { Customers } from "lib/api";
import { authAction } from "store/actions";
import * as types from "store/constants";
import { login, register } from "store/actions/types";
import storage from "lib/storage";
import { toast } from "react-toastify";

export function* fetchLogin({ email, password }: login) {
  try {
    const { data } = yield call(Customers.postLogin, {
      email,
      password
    });
    yield storage.set("USER-KEY", data.accessToken);
    yield (location.href = "/");
  } catch (error) {
    yield toast.error(error.message, { autoClose: 2000 });
  }
}

export function* fetchRegister({ email, password, name }: register) {
  try {
    const { data } = yield call(Customers.postRegister, {
      email,
      password,
      name
    });
    yield storage.set("USER-KEY", data.accessToken);
    yield (location.href = "/");
  } catch (error) {
    yield toast.error(error.message, { autoClose: 2000 });
  }
}

export function* fetchUser() {
  try {
    const { data } = yield call(Customers.getUser);
    yield put(authAction.getUserSuccess(data));
  }
  catch(error){
    yield toast.error(error.message, { autoClose: 2000 });
  }
}

export function* watchFetchLogin() {
  while (true) {
    const { payload } = yield take(types.POST_LOGIN[types.REQUEST]);
    yield fork(fetchLogin, payload);
  }
}

export function* watchFetchRegister() {
  while (true) {
    const { payload } = yield take(types.POST_REGISTER[types.REQUEST]);
    yield fork(fetchRegister, payload);
  }
}

export function* watchFetchgetUser() {
  yield takeLatest(types.GET_USER[types.REQUEST], fetchUser);
}

export default function*() {
  yield all([
    fork(watchFetchLogin),
    fork(watchFetchRegister),
    fork(watchFetchgetUser)
  ]);
}
