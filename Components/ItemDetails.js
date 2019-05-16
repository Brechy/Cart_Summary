/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Expander from './Expander.js';
import { connect } from 'react-redux';

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.icon = {
      minus: require('../assets/icons8-minus-40.png')
    };

    //Hide Item Details expanded true is needed
    this.state = {
      title: 'See Item Details',
      expanded: false
    };
  }

  render() {
    const expand = (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>See item details</Text>
        <Image
          style={styles.button}
          source={require('../assets/icons8-plus-40.png')}
        />
      </View>
    );
    const collapse = (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Hide item details</Text>
        <Image
          style={styles.button}
          source={require('../assets/icons8-minus-40.png')}
        />
      </View>
    );
    const contents = (
      <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
        <View style={{ backgroundColor: 'orange' }}>{this.props.title}</View>
        <Image
          style={styles.itemImage}
          source={{
            uri: this.props.item.details.image_uri
          }}
        />
        <View style={styles.body}>
          <Text>{this.props.item.details.item_name}</Text>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>
        <Expander expanded={expand} collapsed={collapse} contents={contents} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 20,
    margin: 10
  },
  body: {
    flex: 1,
    textAlign: 'left'
  },
  button: {
    marginLeft: 10,
    alignItems: 'flex-end'
  },
  itemImage: {
    height: 66,
    width: 66
  }
});

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(ItemDetails);
