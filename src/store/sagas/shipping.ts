import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { Shipping } from "lib/api";
import { shippingAction } from "store/actions";
import * as types from "store/constants";

function* fetchShipping() {
  try {
    const { data } = yield call(Shipping.getShippingRegions);
    yield put(shippingAction.getShippingSuccess(data));
  } catch (error) {
    yield put(shippingAction.getShippingFailure(error));
  }
}
function* fetchShippingById({payload}: any) {
  try {
    const { data } = yield call(Shipping.getShippingRegionsById, payload);
    yield put(shippingAction.getShippingByIdSuccess(data));
  } catch (error) {
    yield put(shippingAction.getShippingByIdFailure(error));
  }
}
function* watchGetShipping() {
  yield takeLatest([types.GET_SHIPPING_REGION[types.REQUEST]], fetchShipping);
}

function* watchGetShippingById() {
  yield takeLatest([types.GET_SHIPPING_REGION_BY_ID[types.REQUEST]], fetchShippingById);
}

export default function*() {
  yield all([
    fork(watchGetShipping),
    fork(watchGetShippingById),
  ]);
}
