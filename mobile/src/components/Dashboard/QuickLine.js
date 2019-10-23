import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {StyleSheet, View, Image, Text} from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.quickLine}>
        <View style={styles.row}>
          <View style={styles.quickAccess}>
            <Icon
              name="account-circle"
              size={20}
              color="#7b73ef"
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickTitle}>Minha conta</Text>
          </View>

          <View style={styles.quickAccess}>
            <Icon
              name="supervisor-account"
              size={20}
              color="#b071e4"
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickTitle}>Indicar amigo</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.quickAccess}>
            <Icon
              name="school"
              size={20}
              color="#f38538"
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickTitle}>Meus estudos</Text>
          </View>

          <View style={styles.quickAccess}>
            <Icon
              name="favorite"
              size={20}
              color="#f55a90"
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickTitle}>Parceiros</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.quickAccess}>
            <Icon
              name="schedule"
              size={20}
              color="#2bb2eb"
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickTitle}>Agendamentos</Text>
          </View>

          <View style={styles.quickAccess}>
            <Icon
              name="attach-money"
              size={20}
              color="#44be7c"
              style={styles.quickAccessIcon}
            />
            <Text style={styles.quickTitle}>Juros contratados</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quickLine: {
    width: '80%',
    alignSelf: 'center',
    paddingTop: 20,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  quickAccess: {
    flexDirection: 'row',
    width: '50%',
  },
  quickAccessIcon: {
    backgroundColor: '#efefef',
    padding: 4,
    marginRight: 5,
    borderRadius: 15,
  },
  quickTitle: {
    fontSize: 14,
    marginLeft: 5,
    marginTop: 5,
    color: '#3a3a3a',
  },
});
