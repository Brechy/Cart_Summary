/* eslint-disable indent */
import { CHANGE_PROMO_ACTION } from './Codes.js';

export const handleChange = e => dispatch => {
  dispatch({
    type: CHANGE_PROMO_ACTION,
    payload: e.target.value
  });
};
