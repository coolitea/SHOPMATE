import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { Order } from "lib/api";
import { orderAction } from "store/actions";
import * as types from "store/constants";
import { toast } from "react-toastify";
import { fetchEmptyCart } from "./shoppingcart";

function* fetchOrderByCustomer() {
  try {
    const { data } = yield call(Order.getOrderByCustomer);
    yield put(orderAction.getOrderByCustomerSuccess(data));
  } catch (error) {
    yield put(orderAction.getOrderByCustomerFailure(error));
  }
}

function* fetchOrder({ payload }: any) {
  try {
    const { data } = yield call(Order.postOrder, payload);
    yield put(orderAction.postOrderSuccess(data));
    yield toast.success("success order", { autoClose: 1000 });
    yield fetchOrderByCustomer();
    yield fetchEmptyCart();
  } catch (error) {
    yield put(orderAction.postOrderFailure(error));
  }
}
function* watchPostOrder() {
  yield takeLatest([types.POST_ORDER[types.REQUEST]], fetchOrder);
}

function* watchOrderByCustomer() {
  yield takeLatest(
    [types.GET_ORDER_BY_CUSTOMER[types.REQUEST]],
    fetchOrderByCustomer
  );
}
export default function*() {
  yield all([fork(watchPostOrder), fork(watchOrderByCustomer)]);
}
