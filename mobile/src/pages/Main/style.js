import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  background: #f9fafc;
  padding-top: ${getStatusBarHeight()}px;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  align-items: center;
  height: 175px;
`;

export const Perfil = styled.View`
  flex-direction: row;
  margin-top: 15;
  padding-left: 10%;
`;

export const PerfilImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  border: 3px solid #fff;
  margin-right: 10px;
  resize-mode: cover;
`;

export const FullName = styled.Text`
  color: #fff;
  font-weight: bold;
  flex-direction: column;
  margin-top: 13px;
`;

export const BalanceCard = styled.View`
  background: #fff;
  height: 175px;
  width: 80%;
  align-self: center;
  margin-top: -85px;
  border-radius: 8px;
  flex-direction: column;
`;

export const CardTitle = styled.View`
  flex-direction: row;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #cacaca;
  height: 60px;
  width: 100%;
`;

export const TitleText = styled.Text`
  padding: 10px 0px 0px 10px;
  font-size: 14px;
  color: #757575;
  margin-top: 5px;
`;

export const BalanceValue = styled.Text`
  padding: 10px 0px 0px 10px;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
  margin-top: 4px;
  color: #353535;
`;

export const CardBody = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const UniqueService = styled.View`
  flex-direction: column;
`

export const ServiceIcon = styled.Image`
  width: 45px;
  height: 45px;
`;

export const ServiceText = styled.Text`
  text-align: center;
  width: 45px;
`;
