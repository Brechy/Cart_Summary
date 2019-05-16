/* eslint-disable indent */
import { combineReducers } from 'redux';
import promoCodeReducer from './PromoCodeReducer.js';
import setItemDataReducer from './SetItemDataReducer.js';
import tooltipReducer from './TooltipReducer.js';

export default combineReducers({
  promoCode: promoCodeReducer,
  item: setItemDataReducer,
  tooltip: tooltipReducer
});
