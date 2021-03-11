// Partial Libraries Imports
import { RouteProp } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

// Full Libraries Imports
import React from "react";

// Navigation Imports
import { ModuleStackParamList } from "./Module";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faPencilAlt, faThermometerHalf, faTint } from "@fortawesome/free-solid-svg-icons";
import Device from "../components/module/status/Device";

export default (props: {
  route: RouteProp<ModuleStackParamList, "Status">;
}) => {
  return (
    <View>
      
      <View
        style={{
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
              alignItems: "center",
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
