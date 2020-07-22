import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  height: 60px;
  width: 100%;
  background-color: ${({theme}) => theme.secondary};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.textColor};
  letter-spacing: 0.6px;
  font-weight: bold
`;