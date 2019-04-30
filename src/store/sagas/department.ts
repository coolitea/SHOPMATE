import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "lib/api";
import { departmentAction } from "store/actions";
import * as types from "store/constants";

export function* fetchDepartment(action: any) {
  const { data, error } = yield call(api.getDepartments, action.payload);
  if (data) yield put(departmentAction.departmentSuccess(data));
  else yield put(departmentAction.departmentFailure(error));
}

export default function* watchDepartment() {
  yield takeLatest([types.GET_DEPARTMENTS[types.REQUEST]], fetchDepartment);
}
