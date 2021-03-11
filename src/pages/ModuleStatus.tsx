// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Status">;
}) => {
  return (
    <View>
      <Text>Module Status of module {props.route.params.module.code}</Text>
    </View>
  );
};
