// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { Dimensions, Text, View } from "react-native";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";
import { LineChart } from "react-native-chart-kit";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Analytics">;
}) => {
  return (
    <View>
      <Text>Module Analytics of module {props.route.params.module.code}</Text>
    </View>
  );
};
