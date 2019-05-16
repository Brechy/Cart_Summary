/* eslint-disable indent */
import { CHANGE_PROMO_CODE } from './Codes.js';

export const setPromoCode = value => dispatch => {
  dispatch({
    type: CHANGE_PROMO_CODE,
    payload: value
  });
};
