import React from "react";
import { KeyboardTypeOptions } from "react-native";

import { Container, Input, Label } from "./styles";
import { useTheme } from "styled-components";

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
  const theme = useTheme()
  return (
    <Container>
      <Label>{label}</Label>
      <Input 
        secureTextEntry={isPassword}
        keyboardType={inputType}
        placeholder={placeholder}
        placeholderTextColor={theme.placeholderTextColor}
      />
    </Container>
  )
}

export default TextField;
