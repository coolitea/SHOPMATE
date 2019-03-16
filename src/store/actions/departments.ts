import * as types from 'store/constants';
import { departmentsState } from 'store/models';

let request: string, success: string, failure: string;

request = types.GET_DEPARTMENTS[types.REQUEST];
success = types.GET_DEPARTMENTS[types.SUCCESS];
failure = types.GET_DEPARTMENTS[types.FAILURE];


const departmentRequest = (id: string | null) => ({
  type: request,
  id,
});

const departmentSuccess = (departments: departmentsState) => ({
  type: success,
  payload: departments,
});

const departmentfailure = (err: Error) => ({
  type: failure,
  err: err.message,
});

interface departmentRequestAction {
  type: typeof request;
  url: string;
}

interface departmentSuccessAction {
  type: typeof success;
  payload: departmentsState;
}

interface departmentFailureAction {
  type: typeof failure;
  err: string;
}

export type DepartmentActionTypes = departmentRequestAction | departmentSuccessAction | departmentFailureAction;

export default {
  departmentRequest,
  departmentSuccess,
  departmentfailure,
}