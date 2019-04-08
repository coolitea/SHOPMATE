import { GET_ATTRIBUTES_WITH_PRODUCTID, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { attributeState } from 'store/models';
import { AttributeActionTypes } from 'store/actions/attributes';

const initialState: attributeState = {
  attributes: [],
};

export default function(state = initialState, action: any): attributeState {
  switch (action.type) {
    case GET_ATTRIBUTES_WITH_PRODUCTID[REQUEST]:
      return {
        ...state,
      };
    case GET_ATTRIBUTES_WITH_PRODUCTID[SUCCESS]:
      return {
        ...state,
        attributes: action.payload,
      };
    case GET_ATTRIBUTES_WITH_PRODUCTID[FAILURE]:
      return {
        ...state,
      };
    default:
      return state;
  }
}
