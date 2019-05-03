import { call, put, takeLatest } from "redux-saga/effects";
import { Attributes } from "lib/api";
import { attributeAction } from "store/actions";
import * as types from "store/constants";

export function* fetchAttribute(action: any) {
  try {
    const { data } = yield call(Attributes.getAttributeByProductId, action.payload);
    yield put(attributeAction.attributeSuccess(data));
  }
  catch(error) {
    yield put(attributeAction.attributeFailure(error));
  }
}

export default function* watchFetchAttribues() {
  yield takeLatest(
    [types.GET_ATTRIBUTES_WITH_PRODUCTID[types.REQUEST]],
    fetchAttribute
  );
}
