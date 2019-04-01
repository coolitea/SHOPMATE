import { call, put, takeLatest } from 'redux-saga/effects';
import { Products } from 'lib/api';
import { productAction } from 'store/actions';
import * as types from 'store/constants';

import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  REQUEST,
} from 'store/constants';

export function* fetchProducts({ type, id, page }: any) {
  if(type === GET_PRODUCTS_BY_CATEGORY[REQUEST]) {
    try {
      var { data } = yield call(Products.getProductByCategory, id, page);
      yield put(productAction.productByCategorySuccess(data));
    } catch(error) {
      yield put(productAction.productByCategoryFailure(error));
    }
  }
  if(type === GET_PRODUCTS_BY_DEPARTMENT[REQUEST]) {
    try {
      var { data } = yield call(Products.getProductByDepartment, id, page);
      yield put(productAction.productByDepartmentSuccess(data));
    } catch(error) {
      yield put(productAction.productByDepartmentFailure(error));
    }
  }
  if(type === GET_PRODUCTS[REQUEST]) {
    try {
      var { data } = yield call(Products.getProduct, id, page);
      yield put(productAction.productSuccess(data));
    } catch(error) {
      yield put(productAction.productFailure(error));
    }
  }
}

export default function* watchFetchProducts() {
  yield takeLatest([
    types.GET_PRODUCTS[types.REQUEST],
    types.GET_PRODUCTS_BY_CATEGORY[types.REQUEST],
    types.GET_PRODUCTS_BY_DEPARTMENT[types.REQUEST],
  ], fetchProducts);
};
