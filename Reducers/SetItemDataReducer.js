/* eslint-disable indent */
import { SET_ITEM_DATA } from '../Actions/Codes.js';

const initialState = {
  pricing: {
    subtotal: -1,
    savings: -1.1,
    tax: -1.2,
    total: -1.3,
    zip: -11111
  },
  details: {
    item_name: 'Loading...',
    quantity: -1,
    image_uri:
      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ITEM_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
