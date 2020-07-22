import React from "react";

import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginPage from "./Pages/Login";

const StackNavigation = createStackNavigator()

const MainRoutes: React.FC = () => {
  return (
    <NavigationContainer>
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
