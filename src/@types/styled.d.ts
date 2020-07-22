import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isLighten?: boolean
    primary: string
    primaryDarken: string
    secondary: string
    buttonTextColor: string
    textColor: string
    placeholderTextColor: string
  }
}
