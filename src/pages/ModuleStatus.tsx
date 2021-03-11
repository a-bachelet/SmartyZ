// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";

// Components Imports
import Device from "../components/module/status/Device";
import Metrics from "../components/module/status/Metrics";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Status">;
}) => {
  const devices: JSX.Element[] = props.route.params.module.devices?.map(
    (device) => {
      return <Device label={device.label} enabled={device.status} />;
    }
  );

  return (
    <View>
      <View style={styles.rootContainer}>
        <Metrics
          temperature={props.route.params.module.currentMetric.temperature}
          humidity={props.route.params.module.currentMetric.humidity}
        />
      </View>
      {devices}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#FEFEFE",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 15,
  },
});
