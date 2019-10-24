import React, { Component } from 'react';
import {
  Container,
  Header,
  HeaderText,
  BalanceView,
  BalanceText,
  InterestView,
  UniqueInterest,
  InterestText,
  Cards,
  Card,
  CardImage,
  CardDescription,
  StudyingImage,
  StudyingView,
  ActuallyStudying,
  CourseName
} from './style';
import { StyleSheet, View, TouchableOpacity, Text, ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Account extends Component {
  render() {
    const { navigate } = this.props.navigation;

    const UserId = this.props.navigation.getParam('UserId');
    const amountTaken = this.props.navigation.getParam('amountTaken');
    const amountPayd = this.props.navigation.getParam('amountPayd');
    const monthlyInterest = this.props.navigation.getParam('monthlyInterest');
    const totalAmountInTaxes = this.props.navigation.getParam('totalAmountInTaxes');

    return (
      <Container>
        <ImageBackground
          source={require('../../assets/img/midHalfBg.jpg')}
          style={{width: '100%', height: '100%'}}>
            <Header>
              <TouchableOpacity onPress={() => navigate('Main')}>
              <Icon name="keyboard-arrow-left" size={30} color="#fff" />
              </TouchableOpacity>
              <HeaderText>Minha Conta</HeaderText>
          </Header>
          <BalanceView>
            <BalanceText style={{textAlign: 'left', fontSize: 12, paddingLeft: 15}}>Empréstimo Total</BalanceText>
            <BalanceText style={{textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>R$ {amountTaken}</BalanceText>
          </BalanceView>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#d2d2d2'}}>
              Seu id de usuário é {UserId} 😎
            </Text>
          </View>

          <InterestView>
            <UniqueInterest>
              <InterestText>Taxa de Juros</InterestText>
              <InterestText style={{fontSize: 24, fontWeight: 'bold'}}>{monthlyInterest}% <Text style={{fontSize: 14}}>/ mês</Text></InterestText>
            </UniqueInterest>

            <UniqueInterest>
              <InterestText>Valor Pago</InterestText>
              <InterestText style={{fontSize: 24, fontWeight: 'bold', amountPayd}}><Text style={amountPayd > 0 ? {color: '#a9f895'} : {color: '#f895cc'}}>R$ {amountPayd}</Text></InterestText>
            </UniqueInterest>
          </InterestView>

          <Cards>
            <Card style={styles.defaultShadow}>
              <CardImage source={require('../../assets/img/icons/actual.png')} />
              <CardDescription>Configurações</CardDescription>
            </Card>
            <Card style={styles.defaultShadow}>
              <CardImage source="" />
              <CardDescription>Renegociar</CardDescription>
            </Card>
            <Card style={styles.defaultShadow}>
              <CardImage source="" />
              <CardDescription>Metas</CardDescription>
            </Card>
          </Cards>

          <StudyingView>
            <View>
              <ActuallyStudying>Atualmente Cursando</ActuallyStudying>
              <StudyingImage
                source={require('../../assets/img/studying/gostack.png')}
                style={{
                  resizeMode: 'cover',
                }}
              />
              <CourseName>
                Rocketseat | GoStack 9
              </CourseName>
            </View>
          </StudyingView>


        </ImageBackground>
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
