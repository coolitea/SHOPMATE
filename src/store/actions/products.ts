import { 
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from 'store/constants';
import { productState, products, products_detail, product_lists } from 'store/models';

// GET_PRODUCTS
const productRequest = (id: string | undefined) => ({
  type: GET_PRODUCTS[REQUEST],
  id,
});

const productSuccess = (data: product_lists) => ({
  type: GET_PRODUCTS[SUCCESS],
  payload: data,
});

const productFailure = (err: Error) => ({
  type: GET_PRODUCTS[FAILURE],
  err: err.message,
});

interface productRequestAction {
  type: typeof GET_PRODUCTS["REQUEST"];
  id: string | undefined;
}

interface productSuccessAction {
  type: typeof GET_PRODUCTS["SUCCESS"];
  payload: products | products_detail;
}

interface productFailureAction {
  type: typeof GET_PRODUCTS["FAILURE"];
  err: string;
}

// GET_PRODUCTS_BY_CATEGORY
const productByCategoryRequest = (id: string | undefined) => ({
  type: GET_PRODUCTS_BY_CATEGORY[REQUEST],
  id,
});

const productByCategorySuccess = (data: product_lists) => ({
  type: GET_PRODUCTS_BY_CATEGORY[SUCCESS],
  payload: data,
});

const productByCategoryFailure = (err: Error) => ({
  type: GET_PRODUCTS_BY_CATEGORY[FAILURE],
  err: err.message,
});

interface productByCategoryRequestAction {
  type: typeof GET_PRODUCTS_BY_CATEGORY["REQUEST"];
  id: string | undefined;
}

interface productByCategorySuccessAction {
  type: typeof GET_PRODUCTS_BY_CATEGORY["SUCCESS"];
  payload: products | products_detail;
}

interface productByCategoryFailureAction {
  type: typeof GET_PRODUCTS_BY_CATEGORY["FAILURE"];
  err: string;
}
// GET_PRODUCTS_BY_DEPARTMENT
const productByDepartmentRequest = (id: string | undefined) => ({
  type: GET_PRODUCTS_BY_DEPARTMENT[REQUEST],
  id,
});

const productByDepartmentSuccess = (data: product_lists) => ({
  type: GET_PRODUCTS_BY_DEPARTMENT[SUCCESS],
  payload: data,
});

const productByDepartmentFailure = (err: Error) => ({
  type: GET_PRODUCTS_BY_DEPARTMENT[FAILURE],
  err: err.message,
});

interface productByDepartmentRequestAction {
  type: typeof GET_PRODUCTS_BY_DEPARTMENT["REQUEST"];
  id: string | undefined;
}

interface productByDepartmentSuccessAction {
  type: typeof GET_PRODUCTS_BY_DEPARTMENT["SUCCESS"];
  payload: products | products_detail;
}

interface productByDepartmentFailureAction {
  type: typeof GET_PRODUCTS_BY_DEPARTMENT["FAILURE"];
  err: string;
}

export type ProductActionTypes = productRequestAction | productSuccessAction | productFailureAction | productByCategoryRequestAction |productByCategorySuccessAction | productByCategoryFailureAction | productByDepartmentRequestAction | productByDepartmentSuccessAction | productByDepartmentFailureAction;

export default {
  productRequest,
  productSuccess,
  productFailure,
  productByCategoryRequest,
  productByCategorySuccess,
  productByCategoryFailure,
  productByDepartmentRequest,
  productByDepartmentSuccess,
  productByDepartmentFailure,
}