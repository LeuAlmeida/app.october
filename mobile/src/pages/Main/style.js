import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f9fafc;
  justify-content: center;
`;

export const Background = styled.ImageBackground`
  align-items: center;
  height: 175px;
`;

export const Perfil = styled.View`
  flex-direction: row;
  margin-top: 15;
  padding-left: 5%;
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
  height: 150px;
  width: 90%;
  align-self: center;
  margin-top: 20px;
  border-radius: 8px;
  flex-direction: column;
`;

export const CardTitle = styled.View`
  flex-direction: row;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #cacaca;
  height: 45px;
  width: 100%;
`;

export const TitleText = styled.Text`
  padding: 10px 0px 0px 15px;
  font-size: 14px;
  color: #757575;
  margin-top: 5px;
`;

export const BalanceValue = styled.Text`
  padding: 10px 0px 0px 10px;
  font-weight: bold;
  font-size: 22px;
  margin-left: 10%;
  color: #353535;
`;

export const CardBody = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

export const StatementSection = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 0 5%;
  margin-bottom: 5px;
`;

export const AllStatements = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: '5%', paddingRight: 20 },
  showHorizontalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const IndividualStatement = styled.View`
  height: 100px;
  width: 300px;
  background-color: #7770eb;
  border-radius: 6px;
  flex-direction: row;
  margin-right: 10px;

`;

export const StatementIcon = styled.Image`
  width: 60px;
  height: 60px;
  margin: 20px 30px 0px 20px;
`

export const StatementTitle = styled.Text`
  font-size: 18px;
  font-weight:bold;
  flex-direction: column;
  align-self: flex-start;
  color: #fff;
  padding-top: 25px;
`;

export const StatementPrice = styled.Text`
  font-size: 14px;
  align-self: flex-start;
  color: #fff;
`;
