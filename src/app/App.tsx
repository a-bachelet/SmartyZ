// Global Libraries Imports
import "react-native-gesture-handler";

// Partial Libraries Imports
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastAndroid, Platform } from "react-native";

// Full Libraries Imports
import React from "react";
import NetInfo from '@react-native-community/netinfo';

// Pages Imports
import Home from "../pages/Home";
import Login from "../pages/Login";
import Module from "../pages/Module";

// Types Imports
import ModuleType from "../types/Module";

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
  Module: { module: ModuleType };
};

const Stack = createStackNavigator<RootStackParamList>();

let hasAlreadyLostConnection: boolean = false;

NetInfo.addEventListener(state => {
  if ( state.isConnected && hasAlreadyLostConnection && Platform.OS === 'android') {
    ToastAndroid.show('Connexion internet retrouvée.', ToastAndroid.SHORT)
  } else if (!state.isConnected && Platform.OS === 'android') {
    ToastAndroid.show('Connexion internet perdue.', ToastAndroid.SHORT)
  }
});

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
