import React from "react";
import { StatusBar } from "react-native";

import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "./Pages/Login";
import { useTheme } from "styled-components";

const StackNavigation = createStackNavigator();

const MainRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={theme.primary}
        barStyle={theme.isLighten ? "dark-content" : "light-content"}
      /> 
      <StackNavigation.Navigator
        screenOptions={{headerShown: false}}
      >
        <StackNavigation.Screen 
          name="Login" 
          component={LoginPage} 
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;
