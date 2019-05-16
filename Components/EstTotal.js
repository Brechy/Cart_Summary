/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class EstTotal extends Component {
  render() {
    calculatedTotal = this.props.item.pricing.total;
    if (this.props.promoCode.promoCode) {
      console.log(
        'Applying discount for promoCode',
        this.props.promoCode.promoCode
      );
      calculatedTotal = calculatedTotal * 0.9;
    } else {
      console.log('No promo code', this.props.promoCode.promoCode);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.estTotalLabel}>Est. Total</Text>
        <Text style={styles.estTotal}>${calculatedTotal.toFixed(2)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginBottom: 10
  },
  estTotalLabel: {
    flex: 1,
    fontWeight: '800',
    alignItems: 'flex-start',
    fontSize: 30
  },
  estTotal: {
    flex: 1,
    textAlign: 'right',
    alignItems: 'flex-end',
    fontWeight: '800',
    fontSize: 30
  }
});

const mapStateToProps = state => {
  return { item: state.item, promoCode: state.promoCode };
};

export default connect(mapStateToProps)(EstTotal);
