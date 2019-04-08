import { call, put, takeLatest } from 'redux-saga/effects';
import { Attributes } from 'lib/api';
import { attributeAction } from 'store/actions';
import * as types from 'store/constants';

export function* fetchAttribute({id}: any) {
  try {
    var { data } = yield call(Attributes.getAttributeByProductId, id);
    yield put(attributeAction.attributeSuccess(data));
  } catch(error) {
    // yield put(attributeAction.attributefailure(error));
  }
}

export default function* watchFetchAttribues() {
  yield takeLatest([
    types.GET_ATTRIBUTES_WITH_PRODUCTID[types.REQUEST],
  ], fetchAttribute);
};