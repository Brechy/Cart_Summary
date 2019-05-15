/* eslint-disable indent */
import { SET_ITEM_DATA } from './Codes.js';

export const setItemData = itemData => dispatch => {
  dispatch({
    type: SET_ITEM_DATA,
    payload: itemData
  });
};
