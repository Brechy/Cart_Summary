/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//all info is currently hardcoded, will come back and
//connect with all props passed in from mock api calls
class EstTotal extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Est. Total $100</Text>
      </View>
    );
  }
}

//will come back and add all children to main parent containers
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'powderblue',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});

export default EstTotal;