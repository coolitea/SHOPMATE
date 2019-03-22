import { GET_CATEGORIES, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { categoriesState } from 'store/models';
import { CategoryActionTypes } from 'store/actions/categories';

const initialState: categoriesState = {
  isLoading: false,
  rows: [],
};

export default function(state = initialState, action: any): categoriesState {
  switch (action.type) {
    case GET_CATEGORIES[REQUEST]:
      return {
        ...initialState,
        isLoading: true,
        rows: state.rows,
        count: state.count,
      };
    case GET_CATEGORIES[SUCCESS]:
      return {
        ...initialState,
        isLoading: false,
        rows: action.payload.rows,
        count: action.payload.count,
      };
    case GET_CATEGORIES[FAILURE]:
      return {
        ...initialState,
        err: 'error',
      };
    default:
      return state;
  }
}
