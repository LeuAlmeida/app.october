import React from 'react';
import {withNavigation} from 'react-navigation';

import {View, ActivityIndicator, ImageBackground, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { Container, CardContent, CardIcon, CardDescription, CardTitle, CardValue, CardDate, CardPs } from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

    return (
      <>
        <ImageBackground source={require('../../assets/img/bg.jpg')} style={{width: '100%', height: '100%'}}>
          <Container>
            <TouchableOpacity>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              color="#fff"
            />
            </TouchableOpacity>
            <CardContent>
              <CardIcon />
              <CardDescription>You sucessfully</CardDescription>
              <CardTitle>send money to Julia.</CardTitle>

              <CardValue>R$ 400.00,00</CardValue>

              <CardDate>Vencimento 10/12/2019</CardDate>

              <CardPs>Pagando agora você ganhará R$X de desconto</CardPs>

              <TouchableOpacity style={styles.pay}>
                <Text>Done</Text>
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

  }
});

export default withNavigation(Main);
