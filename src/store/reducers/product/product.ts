import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_DEPARTMENT,
  GET_PRODUCT_SEARCH,
  SET_PAGE,
  REQUEST,
  SUCCESS,
  FAILURE,
  GET_REVIEWS,
  GET_PRODUCT_DETAIL
} from "store/constants";
import { productState, review } from "store/models";
import { pagination, average } from "lib/utils";
import _ from "underscore";

const initialState: productState = {
  search: {
    count: 0,
    rows: []
  },
  products: {
    count: 0,
    rows: []
  },
  currentPage: 1,
  pageSize: 6,
  pager: {},
  reviews: [],
  productDetail: {},
  star: 0
};

export default function(state = initialState, action: any): productState {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentpage
      };
    case GET_PRODUCT_SEARCH[REQUEST]:
      return {
        ...state
      };
    case GET_PRODUCTS[REQUEST]:
      return {
        ...state
      };
    case GET_REVIEWS[REQUEST]:
      return {
        ...state
      };
    case GET_PRODUCT_DETAIL[REQUEST]:
      return {
        ...state
      };
    case GET_PRODUCT_SEARCH[SUCCESS]:
      return {
        ...state,
        search: action.payload
      };
    case GET_PRODUCTS[SUCCESS]:
      return {
        ...state,
        products: action.payload,
        pager: pagination.setPage(
          state.currentPage,
          state.pageSize,
          action.payload.count
        ).pager
      };
    case GET_PRODUCTS_BY_CATEGORY[SUCCESS]:
      return {
        ...state,
        products: action.payload,
        pager: pagination.setPage(
          state.currentPage,
          state.pageSize,
          action.payload.count
        ).pager
      };
    case GET_PRODUCTS_BY_DEPARTMENT[SUCCESS]:
      return {
        ...state,
        products: action.payload,
        pager: pagination.setPage(
          state.currentPage,
          state.pageSize,
          action.payload.count.count
        ).pager
      };
    case GET_REVIEWS[SUCCESS]:
      const total = _.reduce(
        action.payload,
        (memo, review: review) => memo + review.rating,
        0
      );
      const amount = action.payload.length;
      return {
        ...state,
        reviews: action.payload,
        star: total === null ? 0 : average(total, amount)
      };
    case GET_PRODUCT_DETAIL[SUCCESS]:
      return {
        ...state,
        productDetail: action.payload[0]
      };
    case GET_PRODUCTS[FAILURE]:
      return {
        ...state
      };
    default:
      return state;
  }
}
