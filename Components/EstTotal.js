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
        <Text>Est. Total {calculatedTotal}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'powderblue',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return { item: state.item, promoCode: state.promoCode };
};

export default connect(mapStateToProps)(EstTotal);
