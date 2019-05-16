/* eslint-disable indent */
import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, Button, TextInput } from 'react-native';
import Expander from './Expander.js';
import { connect } from 'react-redux';
import { setPromoCode } from '../Actions/PromoAction.js';

class PromoCode extends Component {
  state = {
    promoCode: ''
  };

  render() {
    const expanded = (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Apply promo code</Text>
        <Image
          style={styles.button}
          source={require('../assets/icons8-plus-40.png')}
        />
      </View>
    );
    const collapsed = (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.title}>Hide promo code</Text>
        <Image
          style={styles.button}
          source={require('../assets/icons8-minus-40.png')}
        />
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
            setPromoCode(this.state.promoCode)(this.props.dispatch);
            this.setState({ promoCode: '' });
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
  title: {
    textAlign: 'left',
    fontWeight: '400',
    fontSize: 20,
    margin: 10
  },
  body: {
    width: '75%'
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent'
  },
  button: {
    marginLeft: 10,
    alignItems: 'flex-end'
  }
});

const mapStateToProps = state => {
  return { promoCode: state.promoCode };
};

export default connect(mapStateToProps)(PromoCode);
