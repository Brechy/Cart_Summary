/* eslint-disable indent */
import { CHANGE_PROMO_CODE } from '../Actions/Codes.js';

const initialState = {
  promoCode: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PROMO_CODE:
      return {
        ...state,
        promoCode: action.payload
      };
    default:
      return state;
  }
}
