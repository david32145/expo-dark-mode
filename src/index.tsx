import React from "react";
import MainRoutes from "./routes";
import { ThemeProvider } from "styled-components";

import darkTheme from "./themes/dark";

const MainApplication: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainRoutes />
    </ThemeProvider>
  )
}

export default MainApplication;
