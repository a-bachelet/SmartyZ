// Partial Libraries Imports
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { StyleSheet } from "react-native";

// Full Libraries Imports
import React, { useEffect } from "react";

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
import { RootState } from "../redux/CombineReducers";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentModule } from "../redux/module/Actions";

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

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  const currentModule = useSelector(
    (state: RootState) => state.module.currentModule
  );

  const isCurrentModuleLoading = useSelector(
    (state: RootState) => state.module.isCurrentModuleLoading
  );

  const isCurrentModuleError = useSelector(
    (state: RootState) => state.module.isCurrentModuleError
  );

  useEffect(() => {
    if (user) {
      dispatch(fetchCurrentModule(user.token, props.route.params.module.id));
    }
  }, []);

  return (
    <>
      {currentModule != null && (
        <Stack.Navigator
          screenOptions={{
            cardStyle: styles.rootContainer,
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const finalTitle =
                options.title !== undefined ? options.title : scene.route.name;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : finalTitle;

              return (
                <Header
                  tab={title.toString()}
                  rootNavigation={rootNavigation}
                  navigation={navigation}
                  name={currentModule.label}
                  code={currentModule.code}
                  id={currentModule.id}
                />
              );
            },
          }}
        >
          <Stack.Screen
            name="Status"
            component={ModuleStatus}
            options={{}}
            initialParams={{ module: currentModule }}
          />
          <Stack.Screen
            name="Analytics"
            component={ModuleAnalytics}
            options={{}}
            initialParams={{ module: currentModule }}
          />
          <Stack.Screen
            name="Alerts"
            component={ModuleAlerts}
            options={{}}
            initialParams={{ module: currentModule }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FEFEFE",
  },
});
