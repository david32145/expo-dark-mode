import React from "react";
import {StyleSheet, KeyboardTypeOptions} from "react-native";

import { Container, Input, Label } from "./styles";

interface TextFieldProps {
  label: string,
  placeholder: string
  inputType?: KeyboardTypeOptions
  isPassword?: boolean
}

const TextField: React.FC<TextFieldProps> = ({
  inputType,
  label, 
  placeholder,
  isPassword = false
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input 
        secureTextEntry={isPassword}
        keyboardType={inputType}
        placeholder={placeholder}
        placeholderTextColor="rgba(255, 255, 255, 0.4)"
      />
    </Container>
  )
}

export default TextField;
