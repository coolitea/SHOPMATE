import { combineReducers } from 'redux';
import departmentReducer from 'store/reducers/department';
import categoryReducer from 'store/reducers/category';
import authReducer from 'store/reducers/auth';
import productReducer from 'store/reducers/product';
import attributeReducer from 'store/reducers/attribute';

export const rootReducer = combineReducers({
  departments: departmentReducer,
  categories: categoryReducer,
  customer: authReducer,
  product: productReducer,
  attribute: attributeReducer,
});

export type rootState = ReturnType<typeof rootReducer>;