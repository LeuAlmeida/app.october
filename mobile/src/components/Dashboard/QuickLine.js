import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

// import { Container } from './styles';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.quickLine}>
          <View style={styles.row}>
            <View styles={styles.quickAccess}>
              <Image style={styles.quickAcessIcon} source={} />
              <Text style={styles.quickTitle}>
                Teste
              </Text>
            </View>
          </View>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  quickLine: {

  },
  row: {

  },
  quickAccess: {

  },
  quickAccessIcon: {

  },
  quickTitle: {

  }
});
