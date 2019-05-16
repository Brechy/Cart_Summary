/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class TaxFeeEst extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>Est. Taxes and Fees </Text>
          <Text style={styles.text}>
            (Based on {this.props.item.pricing.zip}){' '}
          </Text>
        </View>
        <Text style={styles.estimate}>${this.props.item.pricing.tax}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 300,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    zIndex: 0
  },
  estimate: {
    marginLeft: 60,
    fontWeight: '600',
    fontSize: 20
  },
  text: {
    fontWeight: '400',
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(TaxFeeEst);
