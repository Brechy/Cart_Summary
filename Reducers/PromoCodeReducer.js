/* eslint-disable indent */
import { CODE } from '../Actions/Codes.js';

const initialState = {
  open: false,
  value: ''
};

export default function(state = initialState, action) {
  switch (action.codes) {
    case CODE:
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
}
