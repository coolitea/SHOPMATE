import { combineReducers } from 'redux';
import departmentReducer from 'store/reducers/department';
import categoryReducer from 'store/reducers/category';

export const rootReducer = combineReducers({
  departments: departmentReducer,
  categories: categoryReducer,
});

export type rootState = ReturnType<typeof rootReducer>;