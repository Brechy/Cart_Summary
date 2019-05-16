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
    expand = (
      <View style={styles.container}>
        <Text>See item details</Text>
        <Image source={require('../assets/icons8-plus-40.png')} />
      </View>
    );
    collapse = (
      <View>
        <Text>Hide item details</Text>
        <Image source={require('../assets/icons8-minus-40.png')} />
      </View>
    );
    contents = (
      <View>
        <View style={styles.title}>{this.props.title}</View>
        <Image
          style={styles.buttonImage}
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
  title: {},
  body: {
    width: '75%'
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'brown',
    flexDirection: 'row'
  },
  buttonImage: {
    height: 66,
    width: 66
  }
});

const mapStateToProps = state => {
  return { item: state.item };
};

export default connect(mapStateToProps)(ItemDetails);
