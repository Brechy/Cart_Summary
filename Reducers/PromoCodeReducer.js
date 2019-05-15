/* eslint-disable indent */
import { CHANGE_PROMO_ACTION } from '../Actions/Codes.js';

const initialState = {
  open: false,
  value: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROMO_ACTION:
      return {
        ...state,
        promocode: action.payload
      };
    default:
      return state;
  }
}
