// Partial Libraries Imports
import { faThermometerHalf, faTint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, StyleSheet, View } from "react-native";

// Full Libraries Imports
import React from "react";

export default (props: { temperature: number; humidity: number }) => {
  return (
    <View style={styles.card}>
      <View style={styles.temperatureContainer}>
        <FontAwesomeIcon
          style={styles.colorprimary}
          size={48}
          icon={faThermometerHalf}
        />
        <Text style={styles.text}>{props.temperature}°C</Text>
      </View>
      <View style={styles.humidityContainer}>
        <FontAwesomeIcon style={styles.colorprimary} size={48} icon={faTint} />
        <Text style={styles.text}>{props.humidity}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    fontSize: 25,
  },
  colorprimary: {
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
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  humidityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
