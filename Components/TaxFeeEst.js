/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TaxFeeEst extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Est. Taxes and Fees</Text>
        <Text>(Based on 94608)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default TaxFeeEst;
