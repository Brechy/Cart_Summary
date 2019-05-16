/* eslint-disable indent */
import { SET_TOOLTIP_VISIBLE } from '../Actions/Codes.js';

const initialState = {
  visible: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOOLTIP_VISIBLE:
      return {
        ...state,
        visible: action.payload
      };
    default:
      return state;
  }
}
