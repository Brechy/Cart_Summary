/* eslint-disable indent */
import { SET_TOOLTIP_VISIBLE } from './Codes.js';

export const setTooltipVisible = visible => dispatch => {
  dispatch({
    type: SET_TOOLTIP_VISIBLE,
    payload: visible
  });
};
