import React, { Component } from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

// import { Container } from './styles';


export default class Account extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={() => navigate('Main')}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
