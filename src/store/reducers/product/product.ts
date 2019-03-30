import { 
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  REQUEST,
  SUCCESS,
  FAILURE } from 'store/constants';
import { productState, products, product_lists, products_detail } from 'store/models';
import { ProductActionTypes } from 'store/actions/products';

const initialState: productState = {};

export default function(state = initialState, action: any): productState {
  switch (action.type) {
    case GET_PRODUCTS[REQUEST]:
      return {
        ...initialState,
      };
    case GET_PRODUCTS[SUCCESS]:
      return {
        ...initialState,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_CATEGORY[SUCCESS]:
      return {
        ...initialState,
        products: action.payload,
      };
    case GET_PRODUCTS_BY_DEPARTMENT[SUCCESS]:
      return {
        ...initialState,
        products: action.payload,
      };
    case GET_PRODUCTS[FAILURE]:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}