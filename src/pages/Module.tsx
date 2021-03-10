// Partial Libraries Imports
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { StyleSheet } from "react-native";

// Full Libraries Imports
import React from "react";

// Pages Imports
import ModuleStatus from "./ModuleStatus";
import ModuleAnalytics from "./ModuleAnalytics";
import ModuleAlerts from "./ModuleAlerts";

// Components Imports
import Header from "../components/module/Header";

// Navigation Imports
import { RootStackParamList } from "../app/App";

export type ModuleStackParamList = {
  Status: { id: string };
  Analytics: { id: string };
  Alerts: { id: string };
};

const Stack = createStackNavigator<ModuleStackParamList>();

export default (props: {
  navigation: StackNavigationProp<RootStackParamList, "Module">;
}) => {
  const rootNavigation = props.navigation;

  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: styles.rootContainer,
        header: ({ scene, previous, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Header tab={title.toString()} rootNavigation={rootNavigation} />
          );
        },
      }}
    >
      <Stack.Screen name="Status" component={ModuleStatus} options={{}} />
      <Stack.Screen name="Analytics" component={ModuleAnalytics} options={{}} />
      <Stack.Screen name="Alerts" component={ModuleAlerts} options={{}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#3B3B3B",
  },
});
