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
import { RouteProp } from "@react-navigation/native";
import Module from "../types/Module";

export type ModuleStackParamList = {
  Status: { module: Module };
  Analytics: { module: Module };
  Alerts: { module: Module };
};

const Stack = createStackNavigator<ModuleStackParamList>();

export default (props: {
  route: RouteProp<RootStackParamList, "Module">;
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
            <Header
              tab={title.toString()}
              rootNavigation={rootNavigation}
              navigation={navigation}
              name={props.route.params.module.label}
              code={props.route.params.module.code}
            />
          );
        },
      }}
    >
      <Stack.Screen
        name="Status"
        component={ModuleStatus}
        options={{}}
        initialParams={{ module: props.route.params.module }}
      />
      <Stack.Screen
        name="Analytics"
        component={ModuleAnalytics}
        options={{}}
        initialParams={{ module: props.route.params.module }}
      />
      <Stack.Screen
        name="Alerts"
        component={ModuleAlerts}
        options={{}}
        initialParams={{ module: props.route.params.module }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FEFEFE",
  },
});
