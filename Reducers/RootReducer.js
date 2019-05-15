/* eslint-disable indent */
import { combineReducers } from 'redux';
import promoCodeReducer from './PromoCodeReducer.js';

export default combineReducers({
  promoCode: promoCodeReducer
});
