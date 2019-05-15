/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import CartSummary from './Components/CartSummary';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <CartSummary />
      </Provider>
    );
  }
}
