// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";
import Alert from "../components/module/alerts/Alert";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Alerts">;
}) => {
  return (
    <View>
      <Alert></Alert>
      <Alert></Alert>
    </View>
  );
};
