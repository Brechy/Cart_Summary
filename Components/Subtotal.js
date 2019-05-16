/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

class Subtotal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.estimateLabel}>
          <Text style={styles.text}>Subtotal</Text>
        </View>
        <Text style={styles.estimate}>${this.props.item.pricing.subtotal}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 0,
    marginBottom: 10
  },
  estimate: {
    flex: 1,
    fontWeight: '600',
    textAlign: 'right',
    fontSize: 20
  },
  estimateLabel: {
    flex: 1
  },
  text: {
    fontWeight: '400',
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(Subtotal);
