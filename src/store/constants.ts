export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

interface createRequestTypes {
  [key: string]: string;
}
function createRequestTypes(base: string): createRequestTypes {
  return [REQUEST, SUCCESS, FAILURE].reduce(
    (acc: createRequestTypes, type: string) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
}

// with I/O
export const GET_DEPARTMENTS = createRequestTypes("GET_DEPARTMENTS");
export const GET_CATEGORIES = createRequestTypes("GET_CATEGORIES");

export const GET_PRODUCTS = createRequestTypes("GET_PRODUCTS");
export const GET_PRODUCTS_BY_CATEGORY = createRequestTypes(
  "GET_PRODUCTS_BY_CATEGORY"
);
export const GET_PRODUCTS_BY_DEPARTMENT = createRequestTypes(
  "GET_PRODUCTS_BY_DEPARTMENT"
);
export const GET_REVIEWS = createRequestTypes("GET_REVIEWS");
export const GET_PRODUCT_DETAIL = createRequestTypes("GET_PRODUCT_DETAIL");
export const GET_PRODUCT_SEARCH = createRequestTypes("GET_PRODUCT_SEARCH");

export const POST_REGISTER = createRequestTypes("POST_REGISTER");
export const POST_LOGIN = createRequestTypes("POST_LOGIN");
export const GET_USER = createRequestTypes("GET_USER");
export const PUT_UPDATE_USER = createRequestTypes("PUT_UPDATE_USER");

export const GET_ATTRIBUTES_WITH_PRODUCTID = createRequestTypes(
  "GET_ATTRIBUTES_WITH_PRODUCTID"
);

export const GET_GENERATE_CART_ID = createRequestTypes("GET_GENERATE_CART_ID");
export const POST_ADD_PRODUCT = createRequestTypes("POST_ADD_PRODUCT");
export const GET_LIST_OF_CART = createRequestTypes("GET_LIST_OF_CART");
export const PUT_UPDATE_CART = createRequestTypes("PUT_UPDATE_CART");
export const DELETE_EMPTY_CART = createRequestTypes("DELETE_EMPTY_CART");
export const GET_TOTAL_AMOUNT = createRequestTypes("GET_TOTAL_AMOUNT");
export const DELETE_PRODUCT_IN_CART = createRequestTypes("DELETE_PRODUCT_IN_CART");

export const GET_SHIPPING_REGION = createRequestTypes("GET_SHIPPING_REGION");
export const GET_SHIPPING_REGION_BY_ID = createRequestTypes("GET_SHIPPING_REGION_BY_ID");

// without I/O
export const SET_PAGE = "SET_PAGE";
