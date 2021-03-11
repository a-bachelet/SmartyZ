// Full Libraries Imports
import React from "react";

// Partial Libraries Imports
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function (props: {
  labels: string[];
  data: any[];
  legend: string;
  colors: { bgc: string; bgcGF: string; bgcGT: string };
}) {
  return (
    <LineChart
      key="tempChart"
      data={{
        labels: props.labels,
        datasets: [
          {
            data: props.data,
          },
        ],
        legend: [props.legend],
      }}
      width={Dimensions.get("window").width - 50}
      height={220}
      yAxisInterval={10}
      chartConfig={{
        backgroundColor: props.colors.bgc,
        backgroundGradientFrom: props.colors.bgcGF,
        backgroundGradientTo: props.colors.bgcGT,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
}
