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

class PickupSavingsTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickupTotal: 0,
      tooltipVisible: false
    };
  }

  render() {
    const setTooltipVisible = expanded => {
      this.setState({ ...this.state, tooltipVisible: expanded });
    };
    const toggleTooltipVisible = () => {
      setTooltipVisible(!this.state.tooltipVisible);
    };

    return (
      <TouchableHighlight
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
        onPress={toggleTooltipVisible}
      >
        <View style={styles.container}>
          <Modal
            visible={this.state.tooltipVisible}
            onRequestClose={() => {
              return undefined;
            }}
          >
            <View style={styles.tooltipContainer}>
              <Text style={styles.tooltipText}>
                Picking up your order in the store helps cut costs, and we pass
                the savings on to you!
              </Text>
              <Button
                style={styles.tooltipButton}
                onPress={toggleTooltipVisible}
                title="Close"
              />
            </View>
          </Modal>
          <Text style={styles.toggleText}>Pickup Savings</Text>
          <Text style={styles.estimate}>
            ${this.props.item.pricing.savings}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    zIndex: 0,
    flexDirection: 'row',
    marginBottom: 10
  },
  estimate: {
    flex: 1,
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'right',
    color: '#ff0000'
  },
  toggleText: {
    flex: 1,
    fontWeight: '400',
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  tooltipText: {
    flex: 1,
    fontWeight: '400',
    fontSize: 20,
    color: 'black',
    margin: 20
  },
  tooltipButton: {
    flex: 1
  },
  tooltipContainer: {
    flex: 1,
    flexDirection: 'column'
  }
});

const mapStateToProps = state => {
  return { item: state.item, tooltip: state.tooltip };
};

export default connect(mapStateToProps)(PickupSavingsTotal);
