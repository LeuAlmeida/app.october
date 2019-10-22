import React from 'react';

import {
  SafeAreaView, ScrollView, View, Image, Text, ImageBackground, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafc',
  },
  bgImage: {
    alignItems: 'center',
    height: 175,
    paddingHorizontal: 20,
  },
  perfilImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    resizeMode: 'cover',
    marginRight: 10,
  },
  perfilView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15
  },
  fullName: {
    fontWeight: 'bold',
    flexDirection: 'column',
  },
  userName: {
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexDirection: 'column',
  },
  balanceCard: {
    backgroundColor: '#fff',
    height: 175,
    width: '80%',
    alignSelf: 'center',
    marginTop: -70
  },
  balanceTitle: {

  },

});

import Perfil from '../../assets/img/perfil.jpg';

const Main = () => (



  <SafeAreaView style={styles.container}>
    <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.bgImage}
    resizeMode="cover"
  >
    <View style={styles.perfilView}>
      <Image style={styles.perfilImg} source={Perfil} />
      <Text style={styles.fullName}>Léu Almeida</Text>
    </View>
  </ImageBackground>
    <View style={styles.balanceCard}>
      <Text style={styles.balanceTitle}></Text>
    </View>

  </SafeAreaView>

);

export default Main;
