import { all, fork, call, put, take } from 'redux-saga/effects';
import { Customers } from 'lib/api';
import { registerAction } from 'store/actions';
import * as types from 'store/constants';
import { register } from 'store/actions/register';

export function* fetchRegister({ email, name, password }: register) {
  try {
    const { data } = yield call(Customers.postRegister, {
      email,
      name,
      password,
    });
    yield put(registerAction.registerSuccess(data));
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
