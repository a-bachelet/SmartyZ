// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";

// Full Libraries Imports
import React, { useEffect } from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";
import { Analytic } from "../types/Analytic";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/CombineReducers";
import { fetchCurrentModuleAnalytics } from "../redux/module/Actions";
import { LineChart } from "react-native-chart-kit";
import Metric from "../types/Metric";
import Chart from "../components/module/analytics/Chart";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Analytics">;
}) => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  const analytics: Analytic[] = useSelector(
    (state: RootState) => state.module.currentModuleAnalytics
  );

  const isCurrentModuleAnalyticsLoading = useSelector(
    (state: RootState) => state.module.isCurrentModuleAnalyticsLoading
  );

  useEffect(() => {
    if (user) {
      dispatch(
        fetchCurrentModuleAnalytics(user.token, props.route.params.module.id)
      );
    }
  }, []);

  return (
    <View style={styles.rootContainer}>
      {isCurrentModuleAnalyticsLoading ||
      !analytics ||
      analytics.length === 0 ? (
        <ActivityIndicator color="#F5DF4D" />
      ) : (
        <View>
          <Chart
            labels={analytics.map((a) => a.date.getHours().toString())}
            data={analytics.map((a) => a.temperature)}
            colors={{
              bgc: "#e67e22",
              bgcGF: "#f1c40f",
              bgcGT: "#d35400",
            }}
            legend={"Temperature"}
          />
          <Chart
            labels={analytics.map((a) => a.date.getHours().toString())}
            data={analytics.map((a) => a.humidity)}
            colors={{
              bgc: "#3498db",
              bgcGF: "#2ecc71",
              bgcGT: "#2980b9",
            }}
            legend={"Humidity"}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
