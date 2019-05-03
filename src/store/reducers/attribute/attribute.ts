import {
  GET_ATTRIBUTES_WITH_PRODUCTID,
  REQUEST,
  SUCCESS,
  FAILURE
} from "store/constants";
import { attributeState, attribute } from "store/models";
import _ from "underscore";
import * as fromActions from "store/actions/attributes";

const initialState: attributeState = {
  colors: [],
  sizes: []
};

export default function(state = initialState, action: any): attributeState {
  switch (action.type) {
    case GET_ATTRIBUTES_WITH_PRODUCTID[REQUEST]:
      return {
        ...state
      };
    case GET_ATTRIBUTES_WITH_PRODUCTID[SUCCESS]:
      const { payload } = action;
      return {
        ...state,
        colors: _.filter(
          payload,
          (att: attribute) => att.attribute_name === "Color"
        ),
        sizes: _.filter(
          payload,
          (att: attribute) => att.attribute_name === "Size"
        )
      };
    case GET_ATTRIBUTES_WITH_PRODUCTID[FAILURE]:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
}
