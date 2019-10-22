import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native';
import {
  Container,
  Background,
  PerfilImg,
  Perfil,
  FullName,
  BalanceCard,
  CardTitle,
  TitleText,
  CardBody,
  BalanceValue,

} from './style';
import UniqueService from '../../components/Dashboard/UniqueService';
import QuickLine from '../../components/Dashboard/QuickLine';

import api from '../../services/api';


import perfilPic from '../../assets/img/perfil.jpg';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function() {},
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container>
        <Background
          source={{
            uri:
              'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
          }}>
          <Perfil style={{alignSelf: 'flex-start'}}>
            <PerfilImg source={perfilPic} />
            <FullName>Léu Almeida</FullName>
          </Perfil>
        </Background>
        <BalanceCard style={styles.defaultShadow}>
          <CardTitle>
            <TitleText>Total do empréstimo</TitleText>
            <BalanceValue>R$ 4.380,00</BalanceValue>
          </CardTitle>

          <CardBody>
            <UniqueService />

          </CardBody>
        </BalanceCard>
        <QuickLine />

        {/* <View style={{width: '90%'}}>
            <FlatList
              style={{paddingTop: 10}}
              data={this.state.dataSource}
              renderItem={({item}) => <Text style={{textAlign: 'center'}}>{item.title}, {item.releaseYear}</Text>}
              keyExtractor={({id}, index) => id}
            />
        </View> */}



      </Container>
    );
  }
}

const styles = StyleSheet.create({
  defaultShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
