/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import React from 'react';
import { View } from 'react-native';

const PaddingLine = ({ padding, color, height }) => {
  return (
    <View
      style={{
        ...styles.container,
        marginTop: padding,
        marginBottom: padding
      }}
    >
      <View style={{ ...styles.line, backgroundColor: color }} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  line: {
    flex: 1,
    height: 2
  }
};

export default PaddingLine;
