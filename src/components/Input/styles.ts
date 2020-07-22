import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  color: ${({theme}) => theme.secondary};
  font-size: 16px;
  margin-bottom: 5px;
  letter-spacing: 0.5px;
`;

export const Input = styled.TextInput`
  background-color: ${({theme}) => theme.primaryDarken};
  height: 55px;
  font-size: 15px;
  letter-spacing: 1.0px;
  padding: 0 10px;
  border-radius: 4px;
  font-weight: 400;
  color: ${({theme}) => theme.textColor};
`;
