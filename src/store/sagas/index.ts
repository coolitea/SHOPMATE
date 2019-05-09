import departmentSaga from "store/sagas/department";
import categorySaga from "store/sagas/category";
import authSaga from "store/sagas/auth";
import productSaga from "store/sagas/product";
import attributeSaga from "store/sagas/attribute";
import cartSaga from "store/sagas/shoppingcart";
import shippingSaga from "store/sagas/shipping";

export default [
  departmentSaga,
  categorySaga,
  authSaga,
  productSaga,
  attributeSaga,
  cartSaga,
  shippingSaga
];
