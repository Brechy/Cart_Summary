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
      calculatedTotal = calculatedTotal * 0.9;
    }
    return (
      <View style={styles.container}>
        <Text style={styles.estTotal}>Est. Total ${calculatedTotal}</Text>
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
    justifyContent: 'center'
  },
  estTotal: {
    fontWeight: '800',
    fontSize: 40
  }
});

const mapStateToProps = state => {
  return { item: state.item, promoCode: state.promoCode };
};

export default connect(mapStateToProps)(EstTotal);
