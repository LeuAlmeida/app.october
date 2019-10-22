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

import api from '../../services/api';

import UniqueService from '../../components/Dashboard/UniqueService';

import perfilPic from '../../assets/img/perfil.jpg';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('http://www.mocky.io/v2/5c923b0932000029056bce39')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.installments,
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



            {/* <FlatList
              data={this.state.dataSource}
              renderItem={({item}) => (
                <Text>
                  {item.UserId}, {item.amountTaken}
                </Text>
              )}
              keyExtractor={({id}, index) => id}
            /> */}
          </CardBody>
        </BalanceCard>
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
