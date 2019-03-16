export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

interface createRequestTypes {
  [key: string]: string;
}
function createRequestTypes(base: string): createRequestTypes {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc: createRequestTypes, type: string) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

// with I/O
export const GET_DEPARTMENTS = createRequestTypes('GET_DEPARTMENTS');
export const GET_CATEGORIES = createRequestTypes('GET_CATEGORIES');