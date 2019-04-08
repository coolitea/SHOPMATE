import { combineReducers } from 'redux';
import departmentReducer from 'store/reducers/department';
import categoryReducer from 'store/reducers/category';
import registerReducer from 'store/reducers/register';
import loginReducer from 'store/reducers/login';
import productReducer from 'store/reducers/product';
import attributeReducer from 'store/reducers/attribute';

export const rootReducer = combineReducers({
  departments: departmentReducer,
  categories: categoryReducer,
  register: registerReducer,
  login: loginReducer,
  product: productReducer,
  attribute: attributeReducer,
});

export type rootState = ReturnType<typeof rootReducer>;