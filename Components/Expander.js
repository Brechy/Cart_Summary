/* eslint-disable indent */
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';

class Expander extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       expanded: false
  //     };
  //     console.log('FIJOEWOIWEFOIJJWOEIJFOJIEWFOIJEFWIOJFEWIOJFEIOJFEWOIJEW');
  //     console.log(this.setExpanded);
  //   }
  state = {
    expanded: false
  };
  //   poop() {}
  //   setExpanded(v) {
  //     this.setState({ ...this.state, expanded: v });
  //   }
  render() {
    const collapse = () => {
      this.setState({ expanded: false });
    };
    const expand = () => {
      this.setState({ expanded: true });
    };

    if (!this.state.expanded) {
      return (
        <TouchableHighlight onPress={expand}>
          {this.props.expanded}
        </TouchableHighlight>
      );
    } else {
      return (
        <View style={{ flex: 1 }}>
          <TouchableHighlight onPress={collapse}>
            {this.props.collapsed}
          </TouchableHighlight>
          {this.props.contents}
        </View>
      );
    }
  }
}

export default Expander;
