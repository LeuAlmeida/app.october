import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ImageBackground,
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
  StatementSection,
  AllStatements,
  IndividualStatement,
  StatementIcon,
  StatementTitle,
  StatementPrice,
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UniqueService from '../../components/Dashboard/UniqueService';
import QuickLine from '../../components/Dashboard/QuickLine';

import perfilPic from '../../assets/img/perfil.jpg';
import actualIcon from '../../assets/img/icons/actual.png';
import scheduleIcon from '../../assets/img/icons/schedule.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return (
      fetch('http://www.mocky.io/v2/5c923b0932000029056bce39')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              allData: responseJson,
              dataSource: responseJson.installments,
            },
            function() {},
          );
        })
        .catch(error => {
          console.error(error);
        })
    );
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
          <ImageBackground source={require('../../assets/img/bg.jpg')} style={{width: '100%', height: '100%'}}>
          <Perfil style={{alignSelf: 'flex-start'}}>
            <PerfilImg source={perfilPic} />
            <FullName>Léu Almeida</FullName>
          </Perfil>
        <BalanceCard style={styles.defaultShadow}>
          <CardTitle>
            <TitleText>Total do empréstimo</TitleText>
              <BalanceValue>R$ 4.823,00</BalanceValue>
          </CardTitle>

          <CardBody>
            <UniqueService />
          </CardBody>
        </BalanceCard>

        <QuickLine />

        <StatementSection>
          <Text style={{fontWeight: 'bold', color: '#282d33'}}>Faturas recentes</Text>
          <Icon
              name="keyboard-arrow-right"
              size={24}
              color="#282d33"
              style={styles.quickAccessIcon}
            />
        </StatementSection>
        <FlatList
          horizontal
          data={this.state.dataSource}
          renderItem={({item}) => (
            <AllStatements>
              <IndividualStatement style={styles.defaultShadow}>
                <StatementIcon source={item.payd ? actualIcon : scheduleIcon} />
                <View style={{flexDirection: 'column'}}>
                  <StatementTitle>
                  {item.payd ? 'Fatura paga' : 'Fatura em aberto'}
                  </StatementTitle>
                  <StatementPrice>
                    {item.formatedValue}
                    <Text style={{color: '#73a8f6'}}> / Venc. {item.dueDate}</Text>
                  </StatementPrice>
                </View>
              </IndividualStatement>
            </AllStatements>
          )}
          keyExtractor={({id}, index) => id}
        />

        {/* <View style={{width: '90%'}}>
            <FlatList
              style={{paddingTop: 10}}
              data={this.state.dataSource}
              renderItem={({item}) => <Text style={{textAlign: 'center'}}>{item.formatedValue}, {item.dueDate}</Text>}
              keyExtractor={({id}, index) => id}
            />
        </View> */}
      </ImageBackground>
      </Container>
    );
  }
}

export default withNavigation(Main);

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
