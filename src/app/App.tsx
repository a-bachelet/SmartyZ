// Global Libraries Imports
import "react-native-gesture-handler";

// Partial Libraries Imports
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Full Libraries Imports
import React from "react";

// Pages Imports
import Home from "../pages/Home";
import Login from "../pages/Login";
import Module from "../pages/Module";

// Redux Imports
import Store from "../redux/Store";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Module: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen
            name="Module"
            options={{ headerShown: false }}
            component={Module}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
