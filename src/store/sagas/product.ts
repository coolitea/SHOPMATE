import { all, fork, call, put, take, takeLatest } from 'redux-saga/effects';
import { Products } from 'lib/api';
import { productAction } from 'store/actions';
import * as types from 'store/constants';

import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  REQUEST,
} from 'store/constants';

export function* fetchProducts({ type, id }: any) {
  try {
    switch (type) {
      case GET_PRODUCTS[REQUEST]:
        var { data } = yield call(Products.getProduct, id);
        yield put(productAction.productSuccess(data));
      case GET_PRODUCTS_BY_CATEGORY[REQUEST]:
        var { data } = yield call(Products.getProductByCategory, id);
        yield put(productAction.productByCategorySuccess(data));
      case GET_PRODUCTS_BY_DEPARTMENT[REQUEST]:
        var { data } = yield call(Products.getProductByDepartment, id);
        yield put(productAction.productByDepartmentSuccess(data));
      default: return;
    }
  } catch (error) {
    yield put(productAction.productFailure(error));
  }
}

export function* watchFetchProducts() {
  while (true) {
    const actionRequest = yield take([
      types.GET_PRODUCTS[types.REQUEST],
    ]);
    yield fork(fetchProducts, actionRequest);
  }
}

export function* watchFetchProductsByCategory() {
  while (true) {
    const actionRequest = yield take([
      types.GET_PRODUCTS_BY_CATEGORY[types.REQUEST],
    ]);
    yield fork(fetchProducts, actionRequest);
  }
}
export function* watchFetchProductsByDepartment() {
  while (true) {
    const actionRequest = yield take([
      types.GET_PRODUCTS_BY_DEPARTMENT[types.REQUEST],
    ]);
    yield fork(fetchProducts, actionRequest);
  }
}

export default function* () {
  yield all([
    fork(watchFetchProducts),
    fork(watchFetchProductsByCategory),
    fork(watchFetchProductsByDepartment),
  ]);
}
