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
    yield toast.error(error.response.data.error.message, { autoClose: 2000 });
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
    yield toast.error(error.response.data.error.message, { autoClose: 2000 });
  }
}

export function* fetchUser() {
  try {
    const { data } = yield call(Customers.getUser);
    yield put(authAction.getUserSuccess(data));
  } catch (error) {
    yield toast.error(error.message, { autoClose: 2000 });
  }
}
export function* putUser({ payload }: any) {
  try {
    const { data } = yield call(Customers.putUser, payload);
    yield put(authAction.putUserSuccess(data));
  } catch (error) {
    yield toast.error(error.response.data.error.message, { autoClose: 2000 });
  }
}

export function* putUserAddress({ payload }: any) {
  try {
    const { data } = yield call(Customers.putUserAddress, payload);
    yield put(authAction.putUserAddressSuccess(data));
  } catch (error) {
    yield toast.error(error.response.data.error.message, { autoClose: 2000 });
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

export function* watchPutUser() {
  yield takeLatest(types.PUT_UPDATE_PHONE[types.REQUEST], putUser);
}

export function* watchPutUserAddress() {
  yield takeLatest(types.PUT_UPDATE_ADDRESS[types.REQUEST], putUserAddress);
}
export default function*() {
  yield all([
    fork(watchFetchLogin),
    fork(watchFetchRegister),
    fork(watchFetchgetUser),
    fork(watchPutUser),
    fork(watchPutUserAddress)
  ]);
}
