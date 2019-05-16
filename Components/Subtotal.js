/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

//all info is currently hardcoded, will come back and
//connect with all props passed in from mock api calls
class Subtotal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Subtotal</Text>
        <Text>{this.props.item.pricing.subtotal}</Text>
      </View>
    );
  }
}

//will come back and add all children to main parent containers
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  console.log('state', state);
  return { item: state.item };
};

export default connect(mapStateToProps)(Subtotal);
