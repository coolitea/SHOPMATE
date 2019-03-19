import { GET_DEPARTMENTS, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { departmentsState } from 'store/models';
import { DepartmentActionTypes } from 'store/actions/departments';

const initialState: departmentsState = {
  isLoading: false,
  departments: [],
};

export default function(state = initialState, action: any): departmentsState {
  switch (action.type) {
    case GET_DEPARTMENTS[REQUEST]:
      return {
        ...initialState,
        isLoading: true,
        departments: state.departments,
      };
    case GET_DEPARTMENTS[SUCCESS]:
      return {
        ...initialState,
        isLoading: false,
        departments: action.payload,
      };
    case GET_DEPARTMENTS[FAILURE]:
      return {
        ...initialState,
        err: 'error',
      };
    default:
      return state;
  }
}
