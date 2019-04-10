export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

interface createRequestTypes {
  [key: string]: string;
}
function createRequestTypes(base: string): createRequestTypes {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: createRequestTypes, type: string) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

// with I/O
export const GET_DEPARTMENTS = createRequestTypes('GET_DEPARTMENTS');
export const GET_CATEGORIES = createRequestTypes('GET_CATEGORIES');

export const GET_PRODUCTS = createRequestTypes('GET_PRODUCTS');
export const GET_PRODUCTS_BY_CATEGORY = createRequestTypes('GET_PRODUCTS_BY_CATEGORY');
export const GET_PRODUCTS_BY_DEPARTMENT = createRequestTypes('GET_PRODUCTS_BY_DEPARTMENT');
export const GET_REVIEWS = createRequestTypes('GET_REVIEWS');
export const GET_PRODUCT_DETAIL = createRequestTypes('GET_PRODUCT_DETAIL');

export const POST_REGISTER = createRequestTypes('POST_REGISTER');
export const POST_LOGIN = createRequestTypes('POST_LOGIN');

export const GET_ATTRIBUTES_WITH_PRODUCTID = createRequestTypes('GET_ATTRIBUTES_WITH_PRODUCTID');
// without I/O
export const SET_PAGE = 'SET_PAGE';