import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { ShoppingCart } from "lib/api";
import { cartAction } from "store/actions";
import { toast } from "react-toastify";
import * as types from "store/constants";
import storage from "lib/storage";

export function* fetchCartId() {
  try {
    const { data } = yield call(ShoppingCart.getGenerateId);
    yield put(cartAction.generateCartSuccess(data.cart_id));
    yield storage.set("CART_ID", data.cart_id);
  } catch(error) {
    yield put(cartAction.generateCartFailure(error));
  }
}

export function* fetchListOFCart() {
  try {
    const { data } = yield call(
      ShoppingCart.getListOfProducts,
      storage.get("CART_ID")
    );
    yield put(cartAction.listCartSuccess(data[0]));
  } catch (error) {
    yield put(cartAction.listCartFailure(error));
  }
}

export function* fetchAddToCart({ payload }: any) {
  try {
    const form = {
      ...payload,
      cart_id: storage.get("CART_ID")
    };
    const { data } = yield call(ShoppingCart.addToCart, form);
    yield put(cartAction.addToCartSuccess(data));
  } catch (error) {
    yield put(cartAction.addToCartFailure(error));
  }
}

export function* fetchTotalAmount() {
  try {
    const { data } = yield call(
      ShoppingCart.getTotalAmount,
      storage.get("CART_ID")
    );
    yield put(cartAction.totalAmountSuccess(data));
  } catch (error) {
    yield put(cartAction.totalAmountFailure(error));
  }
}

export function* fetchEmptyCart() {
  try {
    const { data } = yield call(ShoppingCart.empyCart, storage.get("CART_ID"));
    yield put(cartAction.empyCartSuccess(data));
    yield toast.success("removed", { autoClose: 1000 });
    yield fetchListOFCart();
    yield fetchTotalAmount();
  } catch (error) {
    yield put(cartAction.empyCartFailure(error));
  }
}
export function* fetchRemoveProduct({ payload }: any) {
  try {
    yield call(ShoppingCart.removeProduct, payload);
    yield toast.success("removed", { autoClose: 1000 });
    yield fetchListOFCart();
    yield fetchTotalAmount();
  } catch (error) {
    yield put(cartAction.removeProductFailure(error));
  }
}

export function* fetchUpdate({ payload }: any) {
  try {
    const { item_id, quantity } = payload;
    const { data } = yield call(ShoppingCart.update, item_id, quantity);
    yield put(cartAction.updateSuccess(data));
    yield fetchTotalAmount();
  } catch (error) {
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
