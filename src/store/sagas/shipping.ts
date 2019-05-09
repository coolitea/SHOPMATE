import { call, put, takeLatest } from "redux-saga/effects";
import { Shipping } from "lib/api";
import { shippingAction } from "store/actions";
import * as types from "store/constants";

export function* fetchShipping() {
  try {
    const { data } = yield call(Shipping.getShippingRegions);
    yield put(shippingAction.getShippingSuccess(data));
  } catch (error) {
    yield put(shippingAction.getShippingFailure(error));
  }
}

export default function* watchGetShipping() {
  yield takeLatest([types.GET_SHIPPING_REGION[types.REQUEST]], fetchShipping);
}
