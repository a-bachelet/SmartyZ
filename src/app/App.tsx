// Global Libraries Imports
import "react-native-gesture-handler";

// Partial Libraries Imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
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

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={Home}
          />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "center",
  },
});
