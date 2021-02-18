// Partial Libraries Imports
import { View } from "react-native";
import { NativeRouter, Route } from "react-router-native";

// Full Libraries Imports
import React from "react";

// Pages Imports
import ModuleStatus from "./ModuleStatus";
import ModuleAnalytics from "./ModuleAnalytics";
import ModuleAlerts from "./ModuleAlerts";

export default (props: any) => {
  return (
    <NativeRouter>
      <View>
        <Route initialPa exact path="/" component={ModuleStatus} />
        <Route exact path="/analytics" component={ModuleAnalytics} />
        <Route exact path="/alerts" component={ModuleAlerts} />
      </View>
    </NativeRouter>
  );
};
