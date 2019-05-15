/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import EstTotal from './EstTotal.js';
import Subtotal from './Subtotal.js';
import TaxFeeEst from './TaxFeeEst.js';
import PickupSavingsTotal from './PickupSavingsTotal.js';

class CartSummary extends Component {
  render() {
    console.log('Sup SUCKAFISH');
    return (
      <View style={styles.container}>
        <Subtotal />
        <PickupSavingsTotal />
        <TaxFeeEst />
        <EstTotal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { total } = state;
  return { total };
};

export default connect(mapStateToProps)(CartSummary);
