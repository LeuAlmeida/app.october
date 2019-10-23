import React from 'react';
import {withNavigation} from 'react-navigation';

import {
  View,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {
  Container,
  CardContent,
  CardIconCircle,
  CardIcon,
  CardDescription,
  CardTitle,
  CardValue,
  CardDate,
  CardPs,
} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moneyBag from '../../assets/img/money-bag.png';

class Main extends React.Component {
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
            allData: responseJson,
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

    const value = this.props.navigation.getParam('value');
    const dueDate = this.props.navigation.getParam('dueDate');


    return (
      <>
        <ImageBackground
          source={require('../../assets/img/bg.jpg')}
          style={{width: '100%', height: '100%'}}>
          <Container>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')}>
              <Icon name="keyboard-arrow-left" size={30} color="#fff" />
            </TouchableOpacity>
            <CardContent>
              <CardIconCircle>
                <CardIcon source={moneyBag} />
              </CardIconCircle>
              <CardDescription>Sua fatura está disponível</CardDescription>
              <CardTitle>para pagamento! :)</CardTitle>

              <CardValue>{ value }</CardValue>

              <CardDate>Vencimento { dueDate }</CardDate>

              <CardPs>Pagando agora você ganhará R$0,32 de desconto no mês subsequente.</CardPs>

              <TouchableOpacity style={styles.pay}>
                <Text style={styles.payText}>
                  Pagar fatura
                </Text>
              </TouchableOpacity>
            </CardContent>
          </Container>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  pay: {
    flex: 1,
    backgroundColor: '#7b79fc',
    marginBottom: 30,
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7b79fc',
    borderRadius: 50
  },
  payText: {
    paddingVertical: 20,
    color: '#FFF'
  }
});

export default withNavigation(Main);
