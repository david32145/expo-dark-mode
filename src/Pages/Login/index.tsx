import React from "react";
import { StatusBar } from "react-native";

import TextField from "../../components/Input"
import Button from "../../components/Button";

import { Container, MainTitle } from "./styles";

const LoginPage: React.FC = () => {
  return (
    <>
    <StatusBar backgroundColor="#333533"/> 
      <Container>
        <MainTitle>Login</MainTitle>
        <TextField 
          label="Email"
          inputType="email-address"
          placeholder="your email here..."
        />
        <TextField 
          label="Password"
          isPassword
          placeholder="your password here..."
        />
        <Button />
      </Container>
    </>
  );
};

export default LoginPage;
