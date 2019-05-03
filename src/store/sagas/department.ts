import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "lib/api";
import { departmentAction } from "store/actions";
import * as types from "store/constants";

export function* fetchDepartment({ payload }: any) {
  try {
    const { data } = yield call(api.getDepartments, payload);
    yield put(departmentAction.departmentSuccess(data));
  }
  catch(error) {
    yield put(departmentAction.departmentFailure(error));
  }
}

export default function* watchDepartment() {
  yield takeLatest([types.GET_DEPARTMENTS[types.REQUEST]], fetchDepartment);
}
