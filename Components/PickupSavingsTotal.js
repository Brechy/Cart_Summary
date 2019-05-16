/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Modal,
  Button
} from 'react-native';
import { connect } from 'react-redux';
// import Tooltip from './Tooltip.js';
import { setTooltipVisible } from '../Actions/SetTooltipVisible';

class PickupSavingsTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupTotal: 0,
      tooltipVisible: false
    };
  }

  render() {
    //   close={() => {
    //     setTooltipVisible(false)(this.props.dispatch);
    //   }}
    //   image={require('../assets/pusheen-money.png')}
    //   text="
    // />
    //);
    //}
    const setTooltipVisible = expanded => {
      this.setState({ ...this.state, tooltipVisible: expanded });
    };
    const toggleTooltipVisible = () => {
      setTooltipVisible(!this.state.tooltipVisible);
    };

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={toggleTooltipVisible}>
          <View>
            <Modal
              visible={this.state.tooltipVisible}
              onRequestClose={() => {
                // this callback is required on android but we don't need it.
                // returning undefined.
                return undefined;
              }}
            >
              <View>
                <Text>
                  Picking up your order in the store helps cut costs, and we
                  pass the savings on to you!
                </Text>
                <Button onPress={toggleTooltipVisible} title="Close" />
              </View>
            </Modal>
            <Text>Pickup Savings</Text>
            <Text>{this.props.item.pricing.savings}</Text>
          </View>
        </TouchableHighlight>
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
  return { item: state.item, tooltip: state.tooltip };
};

export default connect(mapStateToProps)(PickupSavingsTotal);
