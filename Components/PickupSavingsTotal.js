/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import Tooltip from './Tooltip.js';

class PickupSavingsTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupTotal: 0
    };
  }

  render() {
    console.log('Sup foo');
    return (
      <View style={styles.container}>
        <Tooltip
          image={require('../assets/pusheen-money.png')}
          text="Picking up your order in the store helps cut costs, and we pass
                the savings on to you!"
          style={styles.tooltip}
        />
        <Text>Pickup Savings {this.props.item.pricing.savings}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'plum'
  },
  tooltip: {}
});

const mapStateToProps = state => {
  console.log('state', state);
  return { item: state.item };
};

export default connect(mapStateToProps)(PickupSavingsTotal);
