// Partial Libraries Imports
import { Button } from "react-native";

// Full Libraries Imports
import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../app/App';

export default ({ navigation } : { navigation : StackNavigationProp<RootStackParamList, 'Login'> }) => {
  return (
    <Button
      onPress={() => {
        navigation.push('Home');
        console.log("CLICKED LOGIN BUTTON !");
      }}
      title="Login"
    />
  );
};
