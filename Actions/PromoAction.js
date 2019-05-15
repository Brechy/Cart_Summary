/* eslint-disable indent */
import { CODE } from 'Actions/Codes.js';

export const handleChange = e => dispatch => {
  dispatch({
    type: CODE,
    payload: e.target.value
  });
};
