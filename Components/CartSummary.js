/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import EstTotal from './EstTotal.js';
import Subtotal from './Subtotal.js';
import TaxFeeEst from './TaxFeeEst.js';
import PickupSavingsTotal from './PickupSavingsTotal.js';
import ItemDetails from './ItemDetails.js';
import PromoCode from './PromoCode.js';

class CartSummary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Subtotal />
        <PickupSavingsTotal />
        <TaxFeeEst />
        <EstTotal />
        <ItemDetails />
        <PromoCode />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  }
});

const mapStateToProps = state => {
  const { total } = state;
  return { total };
};

export default connect(mapStateToProps)(CartSummary);
