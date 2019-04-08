import departmentSaga from 'store/sagas/department';
import categorySaga from 'store/sagas/category';
import registerSaga from 'store/sagas/registser';
import loginSaga from 'store/sagas/login';
import productSaga from 'store/sagas/product';
import attributeSaga from 'store/sagas/attribute';

export default [
  departmentSaga,
  categorySaga,
  registerSaga,
  loginSaga,
  productSaga,
  attributeSaga,
];