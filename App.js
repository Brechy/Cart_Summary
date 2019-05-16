/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { setItemData } from './Actions/SetItemData.js';
import store from './store.js';
import CartSummary from './Components/CartSummary';
import { getItemData } from './DataMock';

class Root extends React.Component {
  componentDidMount() {
    getItemData().then(data => {
      setItemData(data)(store.dispatch);
    });
  }
  render() {
    return <CartSummary />;
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
