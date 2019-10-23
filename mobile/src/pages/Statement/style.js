import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  height: 90%;
  margin-top: 10%;
  align-self: center;
  padding: 0px 5%;

`;

export const CardContent = styled.View`
  background: #fff;
  margin-top: 20px;
  height: 90%;
  align-items: center;
  border-radius: 8px;
  padding-top: 20px;
`;

export const CardIconCircle = styled.View`
  background: #f1ebf3;
  width: 85px;
  height: 85px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const CardIcon = styled.Image`
  width: 55px;
  height: 55px;
`;

export const CardDescription = styled.Text`
  margin-bottom: 3px;
`;

export const CardTitle = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
`;


export const CardValue = styled.Text`
  flex: 1;
  margin-top: 20px;
  font-size: 28px;
  font-weight: bold;
  color: #7b79fc;
`;

export const CardDate = styled.Text`
  font-size: 12px;
  color: #4c4c4c;
  justify-content: flex-end;
`;

export const CardPs = styled.Text`
  flex: 2;
  margin-top: 20%;
  font-size: 12px;
  padding: 0 30px;
  justify-content: flex-end;
  text-align: center;
`;
