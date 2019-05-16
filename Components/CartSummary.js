/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import EstTotal from './EstTotal.js';
import Subtotal from './Subtotal.js';
import TaxFeeEst from './TaxFeeEst.js';
import PickupSavingsTotal from './PickupSavingsTotal.js';
import ItemDetails from './ItemDetails.js';
import PromoCode from './PromoCode.js';
import PaddingLine from './PaddingLine.js';

class CartSummary extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>Cart Summary</Text>
          <PaddingLine padding={5} color="black" height={2} />
          <Subtotal />
          <PickupSavingsTotal />
          <TaxFeeEst />
          <EstTotal />
          <PaddingLine padding={5} color="black" height={2} />
          <ItemDetails />
          <PaddingLine padding={5} color="black" height={2} />
          <PromoCode />
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 40,
    color: 'black',
    margin: 20
  },
  container: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20
  }
});

const mapStateToProps = state => {
  const { total } = state;
  return { total };
};

export default connect(mapStateToProps)(CartSummary);
