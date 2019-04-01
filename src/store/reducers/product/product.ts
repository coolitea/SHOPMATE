import { 
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  SET_PAGE,
  REQUEST,
  SUCCESS,
  FAILURE } from 'store/constants';
import { productState } from 'store/models';
import { ProductActionTypes } from 'store/actions/products';
import { pagination } from 'lib/utils';

const initialState: productState = {
  products: {
    count: 0,
    rows: [],
  },
  productDetail: null,
  currentPage: 1,
  pageSize: 20,
  pager: {},
};

export default function(state = initialState, action: any): productState {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentpage,
      }
    case GET_PRODUCTS[REQUEST]:
      return {
        ...state,
      };
    case GET_PRODUCTS[SUCCESS]:
      return {
        ...state,
        products: action.payload,
        pager: pagination.setPage(state.currentPage, state.pageSize, action.payload.count).pager,
      };
    case GET_PRODUCTS_BY_CATEGORY[SUCCESS]:
      return {
        ...state,
        products: action.payload,
        pager: pagination.setPage(state.currentPage, state.pageSize, action.payload.count).pager,
      };
    case GET_PRODUCTS_BY_DEPARTMENT[SUCCESS]:
      return {
        ...state,
        products: action.payload,
        pager: pagination.setPage(state.currentPage, state.pageSize, action.payload.count.count).pager,
      };
    case GET_PRODUCTS[FAILURE]:
      return {
        ...state,
      };
    default:
      return state;
  }
}