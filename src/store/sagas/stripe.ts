import { call, put, takeLatest, all, fork } from "redux-saga/effects";
import { Stripe } from "lib/api";
import { stripeAction } from "store/actions";
import * as types from "store/constants";
import { toast } from "react-toastify";

function* fetchCharge({ payload }: any) {
  try {
    const { data } = yield call(Stripe.chage, payload);
    yield put(stripeAction.postChargeSuccess(data));
    yield toast.success("success payments", { autoClose: 1000 });
    yield (location.href = "/");
  } catch (error) {
    yield put(stripeAction.postChargeFailure(error.response.data.error));
  }
}
function* watchCharge() {
  yield takeLatest([types.POST_CHARGE[types.REQUEST]], fetchCharge);
}
export default function*() {
  yield all([fork(watchCharge)]);
}
