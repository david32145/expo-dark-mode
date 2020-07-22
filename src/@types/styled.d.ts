import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: string
    primaryDarken: string
    secondary: string
    textColor: string
    placeholderTextColor: string
  }
}