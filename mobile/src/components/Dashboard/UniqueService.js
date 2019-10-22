import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

import capital from '../../assets/img/icons/capital.png';
import calendar from '../../assets/img/icons/calendar.png';
import articles from '../../assets/img/icons/articles.png';

export default function UniqueService() {
  return (
    <>

      <View style={styles.uniqueService}>
        <Image style={styles.serviceIcon} source={capital} />
        <Text style={styles.serviceText}>
          Pagamentos
        </Text>
      </View>

      <View style={styles.uniqueService}>
        <Image style={styles.serviceIcon} source={calendar} />
        <Text style={styles.serviceText}>
          Agendamentos
        </Text>
      </View>
      <View style={styles.uniqueService}>
        <Image style={styles.serviceIcon} source={articles} />
        <Text style={styles.serviceText}>
          Meu Contrato
        </Text>
      </View>

      </>
  )
}

const styles = StyleSheet.create({
  uniqueService: {
    flexDirection: 'column',
    paddingHorizontal: 8,
    marginTop: 5
  },
  serviceIcon: {
    width: 60,
    height: 60,
    alignSelf: 'center'
  },
  serviceText: {
    marginTop: 3,
    textAlign: 'center',
    width: 80,
    fontSize: 11,
    color: '#3c3c3c'
  },
});
