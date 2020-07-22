import React from "react";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from 'react-native-appearance';
import MainRoutes from "./routes";

import getTheme from "./themes";

const MainApplication: React.FC = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <ThemeProvider theme={getTheme(isDark)}>
      <MainRoutes />
    </ThemeProvider>
  );
};

export default MainApplication;
