import React from 'react';
import {StyleSheet, Text} from 'react-native';

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
  UniqueService,
  ServiceIcons,
  ServiceIcon,
  ServiceTexts,
  ServiceText,
} from './style';

import perfilPic from '../../assets/img/perfil.jpg';

import allPays from '../../assets/img/icons/capital.png';

const Main = () => (
  <Container>
    <Background
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
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
        <UniqueService>
          <ServiceIcon source={allPays} />
          <ServiceText>Teste</ServiceText>
        </UniqueService>
        <UniqueService>
          <ServiceIcon source={allPays} />
          <ServiceText>Teste</ServiceText>
        </UniqueService>
        <UniqueService>
          <ServiceIcon source={allPays} />
          <ServiceText>Teste</ServiceText>
        </UniqueService>
      </CardBody>
    </BalanceCard>
  </Container>
);

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

export default Main;
