import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,

} from 'react-native';
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
  AllStatements,
  IndividualStatement,
  StatementIcon,
  StatementTitle,
  StatementPrice
} from './style';
import UniqueService from '../../components/Dashboard/UniqueService';
import QuickLine from '../../components/Dashboard/QuickLine';

import api from '../../services/api';

import perfilPic from '../../assets/img/perfil.jpg';
import actualIcon from '../../assets/img/icons/actual.png';
import scheduleIcon from '../../assets/img/icons/schedule.png';

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

        <AllStatements>
        <IndividualStatement>
            <StatementIcon source={actualIcon} />
            <View style={{flexDirection: 'column'}}>
              <StatementTitle>Fatura fechada</StatementTitle>
              <StatementPrice>R$ 456,00 <Text style={{color: '#73a8f6'}}>/ Venc. 31/10</Text></StatementPrice>
            </View>
          </IndividualStatement>

          <IndividualStatement>
            <StatementIcon source={scheduleIcon} />
            <View style={{flexDirection: 'column'}}>
              <StatementTitle>Fatura em aberto</StatementTitle>
              <StatementPrice>R$ 456,00 <Text style={{color: '#73a8f6'}}>/ Novembro</Text></StatementPrice>
            </View>
          </IndividualStatement>

          <IndividualStatement>
            <StatementIcon source={scheduleIcon} />
            <View style={{flexDirection: 'column'}}>
              <StatementTitle>Fatura em aberto</StatementTitle>
              <StatementPrice>R$ 456,00 <Text style={{color: '#73a8f6'}}>/ Dezembro</Text></StatementPrice>
            </View>
          </IndividualStatement>

        </AllStatements>

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
