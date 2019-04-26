import { call, put, takeLatest } from "redux-saga/effects";
import { ShoppingCart } from "lib/api";
import { cartAction } from "store/actions";
import * as types from "store/constants";

export function* fetchCart() {
  const { data, error } = yield call(ShoppingCart.getGenerateId);
  if (data) yield put(cartAction.generateCartSuccess(data));
  else yield put(cartAction.generateCartFailure(error));
}

export default function* watchFetchCart() {
  yield takeLatest([types.GET_GENERATE_CART_ID[types.REQUEST]], fetchCart);
}
