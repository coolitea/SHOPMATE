import { all, fork, call, put, take } from 'redux-saga/effects';
import { Customers } from 'lib/api';
import { registerAction } from 'store/actions';
import * as types from 'store/constants';
import { register } from 'store/actions/register';
import storage from 'lib/storage';

export function* fetchRegister({ email, name, password }: register) {
  try {
    const { data } = yield call(Customers.postRegister, {
      email,
      name,
      password,
    });
    yield storage.set('Authorization', data.accessToken);
    yield put(registerAction.registerSuccess(data));
    yield (location.href = '/');
  } catch (error) {
    yield put(registerAction.registerFailure(error));
  }
}

export function* watchFetchRegister() {
  while (true) {
    const { email, name, password } = yield take(types.POST_REGISTER[types.REQUEST]);
    yield fork(fetchRegister, { email, name, password });
  }
}

export default function* () {
  yield all([fork(watchFetchRegister)]);
}
