/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput } from 'react-native';
import Expander from './Expander.js';
import { connect } from 'react-redux';
import { setPromoCode } from '../Actions/PromoAction.js';

class PromoCode extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    promoCode: ''
  };

  render() {
    const expanded = (
      <View style={styles.container}>
        <Text>Apply promo code</Text>
        <Image source={require('../assets/icons8-plus-40.png')} />
      </View>
    );
    const collapsed = (
      <View>
        <Text>Hide promo code</Text>
        <Image source={require('../assets/icons8-minus-40.png')} />
      </View>
    );
    const contents = (
      <View style={styles.container}>
        <View style={styles.title}>{this.props.title}</View>
        <TextInput
          style={{ height: 40, borderColor: 'black', borderWidth: 2 }}
          onChangeText={text => this.setState({ promoCode: text })}
          value={this.state.promoCode}
        />
        <Button
          onPress={() => {
            setPromoCode(this.state.promoCode);
            alert('promo code applied');
          }}
          title="Apply"
        />
      </View>
    );

    return (
      <View style={styles.container}>
        <Expander
          expanded={expanded}
          collapsed={collapsed}
          contents={contents}
        />
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
    backgroundColor: 'transparent'
  },
  buttonImage: {
    height: 66,
    width: 66
  }
});

const mapStateToProps = state => {
  return { promoCode: state.promoCode };
};

export default connect(mapStateToProps)(PromoCode);
