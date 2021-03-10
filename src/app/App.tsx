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

// Redux Imports
import Store from "../redux/Store";

// Sentry Imports
import * as Sentry from 'sentry-expo';

Sentry.init({
  dsn: 'https://4245efd413ae497abaa8e2a7e730393e@o547706.ingest.sentry.io/5670312',
  enableInExpoDevelopment: true,
  debug: false,
});

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
