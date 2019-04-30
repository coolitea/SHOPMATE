import { GET_DEPARTMENTS, REQUEST, SUCCESS, FAILURE } from "store/constants";
import { departmentsState } from "store/models";

const initialState: departmentsState = {
  isLoading: false,
  departments: []
};

export default function(state = initialState, action: any): departmentsState {
  switch (action.type) {
    case GET_DEPARTMENTS[REQUEST]:
      return {
        ...initialState,
        isLoading: true,
        departments: state.departments
      };
    case GET_DEPARTMENTS[SUCCESS]:
      return {
        ...initialState,
        isLoading: false,
        departments: action.payload
      };
    case GET_DEPARTMENTS[FAILURE]:
      return {
        ...initialState,
        err: action.err
      };
    default:
      return state;
  }
}
