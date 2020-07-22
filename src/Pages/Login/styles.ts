import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.primary};
  padding: 0 20px;
`;

export const MainTitle = styled.Text`
  align-self: flex-start;
  margin-bottom: 60px;
  color: ${({theme}) => theme.textColor};
  font-weight: bold;
  font-size: 36px;
`;