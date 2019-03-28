import { combineReducers } from 'redux';
import departmentReducer from 'store/reducers/department';
import categoryReducer from 'store/reducers/category';
import registerReducer from 'store/reducers/register';
import loginReducer from 'store/reducers/login';

export const rootReducer = combineReducers({
  departments: departmentReducer,
  categories: categoryReducer,
  register: registerReducer,
  login: loginReducer,
});

export type rootState = ReturnType<typeof rootReducer>;