import departmentSaga from 'store/sagas/department';
import categorySaga from 'store/sagas/category';
import authSaga from 'store/sagas/auth';
import productSaga from 'store/sagas/product';
import attributeSaga from 'store/sagas/attribute';

export default [
  departmentSaga,
  categorySaga,
  authSaga,
  productSaga,
  attributeSaga,
];