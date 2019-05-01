import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { ShoppingCart } from "lib/api";
import { cartAction } from "store/actions";
import * as types from "store/constants";
import storage from "lib/storage";

export function* fetchCartId() {
  const { data, error } = yield call(ShoppingCart.getGenerateId);
  if (data) {
    yield put(cartAction.generateCartSuccess(data.cart_id));
    storage.set("CART_ID", data.cart_id);
  } else {
    yield put(cartAction.generateCartFailure(error));
  }
}

export function* fetchListOFCart() {
  const { data, error } = yield call(
    ShoppingCart.getListOfProducts,
    storage.get("CART_ID")
  );
  if (data) {
    yield put(cartAction.listCartSuccess(data));
  } else {
    yield put(cartAction.listCartFailure(error));
  }
}

export function* fetchAddToCart(action: any) {
  const form = {
    ...action.payload,
    cart_id: storage.get("CART_ID")
  };
  const { data, error } = yield call(ShoppingCart.addToCart, form);
  if (data) {
    yield put(cartAction.addToCartSuccess(data));
  } else {
    yield put(cartAction.addToCartFailure(error));
  }
}

export function* fetchTotalAmount() {
  const { data, error } = yield call(
    ShoppingCart.getTotalAmount,
    storage.get("CART_ID")
  );
  if (data) {
    yield put(cartAction.totalAmountSuccess(data));
  } else {
    yield put(cartAction.totalAmountFailure(error));
  }
}

export function* fetchEmptyCart() {
  const { data, error } = yield call(
    ShoppingCart.empyCart,
    storage.get("CART_ID")
  );
  if (data) {
    yield put(cartAction.empyCartSuccess(data));
  } else {
    yield put(cartAction.empyCartFailure(error));
  }
}
export function* fetchRemoveProduct(action: any) {
  const { error } = yield call(ShoppingCart.removeProduct, action.payload);
  if (error) {
    yield put(cartAction.removeProductFailure(error));
  } else {
    yield fetchListOFCart();
    yield fetchTotalAmount();
  }
}

export function* fetchUpdate(action: any) {
  const { item_id, quantity } = action.payload;
  const { data, error } = yield call(ShoppingCart.update, item_id, quantity);
  if (data) {
    yield put(cartAction.updateSuccess(data));
    yield fetchTotalAmount();
  } else {
    yield put(cartAction.updateFailure(error));
  }
}
export function* watchGenerateCart() {
  yield takeLatest([types.GET_GENERATE_CART_ID[types.REQUEST]], fetchCartId);
}

export function* watchListOfCart() {
  yield takeLatest([types.GET_LIST_OF_CART[types.REQUEST]], fetchListOFCart);
}

export function* watchAddToCart() {
  yield takeLatest([types.POST_ADD_PRODUCT[types.REQUEST]], fetchAddToCart);
}

export function* watchTotalAmount() {
  yield takeLatest([types.GET_TOTAL_AMOUNT[types.REQUEST]], fetchTotalAmount);
}

export function* watchEmptyCart() {
  yield takeLatest([types.DELETE_EMPTY_CART[types.REQUEST]], fetchEmptyCart);
}

export function* watchRemoveProduct() {
  yield takeLatest(
    [types.DELETE_PRODUCT_IN_CART[types.REQUEST]],
    fetchRemoveProduct
  );
}

export function* watchUpdate() {
  yield takeLatest([types.PUT_UPDATE_CART[types.REQUEST]], fetchUpdate);
}

export default function*() {
  yield all([
    fork(watchGenerateCart),
    fork(watchListOfCart),
    fork(watchAddToCart),
    fork(watchTotalAmount),
    fork(watchEmptyCart),
    fork(watchRemoveProduct),
    fork(watchUpdate)
  ]);
}
