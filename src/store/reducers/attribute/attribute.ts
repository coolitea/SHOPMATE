import { GET_ATTRIBUTES_WITH_PRODUCTID, REQUEST, SUCCESS, FAILURE } from 'store/constants';
import { attributeState, attribute } from 'store/models';
import { AttributeActionTypes } from 'store/actions/attributes';
import _ from 'underscore';

const initialState: attributeState = {
  colors: [],
  sizes: [],
};

export default function (state = initialState, action: any): attributeState {
  switch (action.type) {
    case GET_ATTRIBUTES_WITH_PRODUCTID[REQUEST]:
      return {
        ...state,
      };
    case GET_ATTRIBUTES_WITH_PRODUCTID[SUCCESS]:
      return {
        ...state,
        colors: _.filter(action.payload, (att: attribute) => att.attribute_name === 'Color'),
        sizes: _.filter(action.payload, (att: attribute) => att.attribute_name === 'Size'),
      };
    case GET_ATTRIBUTES_WITH_PRODUCTID[FAILURE]:
      return {
        ...state,
      };
    default:
      return state;
  }
}
