import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f9fafc;
  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 15px;
  width: 90%;
  align-self: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  padding-right: 32%;
  margin-top: 3px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const BalanceView = styled.View`
  width: 90%;
  height: 45px;
  background: #ffffff5c;
  align-self: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 40px;
  padding: 0px 20px;
  margin-bottom: 10px;
`;

export const BalanceText = styled.Text`
  width: 50%;
  align-self: center;
  color: #fff;
`;

export const InterestView = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 20px;
  flex-direction: row;
`;

export const UniqueInterest = styled.View`
  width: 50%;
  align-items: center;
`;

export const InterestText = styled.Text`
  color: #fff;
  margin-bottom: 3px;
`;

export const Cards = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 20px;
  flex-direction: row;
`;

export const Card = styled.View`
  width: 30%;
  height: 110px;
  background: #fff;
  align-self: center;
  justify-content: center;
  margin: 0 1.5%;
  border-radius: 7px;
`;

export const CardImage = styled.Image`
  width: 45px;
  height: 45px;
  align-self: center;
`;

export const CardDescription = styled.Text`
  align-self: center;
  margin-top: 15px;
  font-weight: bold;
  color: #333;
  font-size: 12px;
`;

export const StudyingView = styled.View`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;

export const StudyingImage = styled.Image`
  width: 100%;
  margin-top: 10px;
  height: 120px;
  border-radius: 8px;
`
export const ActuallyStudying = styled.Text`
  color: #333;
  font-weight: bold;
  margin-top: 10px;
`;

export const CourseName = styled.Text`
  color: #fff;
  text-transform: uppercase;
  margin-top: -30px;
  margin-left: 15px;
  font-weight: bold;
`;
