// Partial Libraries Imports
import { View, Text, StyleSheet } from "react-native";

// Full Libraries Imports
import React from "react";

// Pages Imports
import ModuleStatus from "./ModuleStatus";
import ModuleAnalytics from "./ModuleAnalytics";
import ModuleAlerts from "./ModuleAlerts";
import {
  faChevronLeft,
  faPencilAlt,
  faThermometerHalf,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Device from "../components/module/status/Device";

export default (props: any) => {
  return (
    <View style={{ height: "100%", backgroundColor: "#3B3B3B" }}>
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",

          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 35,
        }}
      >
        <FontAwesomeIcon
          style={{ color: "#F5DF4D" }}
          size={25}
          icon={faChevronLeft}
        />
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: 24,
          }}
        >
          Living Room
        </Text>
        <FontAwesomeIcon
          style={{ color: "#F5DF4D" }}
          size={25}
          icon={faPencilAlt}
        />
      </View>

      <View
        style={{
          marginTop: "calc(100px - 35px - 24px)",
          height: "calc(100% - 110px)",
          paddingTop: 15,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          backgroundColor: "#FEFEFE",
        }}
      >
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "right",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon
              style={styles.icon}
              size={48}
              icon={faThermometerHalf}
            />
            <Text style={styles.metrics}>22°C</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon style={styles.icon} size={48} icon={faTint} />
            <Text style={styles.metrics}>24%</Text>
          </View>
        </View>

        <Device></Device>
        <Device></Device>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  metrics: {
    fontWeight: "700",
    fontSize: 25,
  },
  icon: {
    color: "#F5DF4D",
  },
  card: {
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 25,
    marginLeft: 14,
    marginRight: 14,
    paddingTop: 75,
    paddingBottom: 75,
  },
});
