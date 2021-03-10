// Partial Libraries Imports
import { Pressable, StyleSheet, Text, View } from "react-native";

// Full Libraries Imports
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronRight,
  faCircle,
  faThermometerHalf,
  faTint,
} from "@fortawesome/free-solid-svg-icons";

// Types Imports
import Module from "../../types/Module";

export default (props: { module: Module }) => {
  const goToModule = (id: string) => {
    console.log(id);
  };

  return (
    <View style={styles.rootContainer}>
      <Pressable
        style={styles.innerContainer}
        onPress={() => goToModule(props.module.id)}
      >
        <FontAwesomeIcon style={styles.colorSucces} icon={faCircle} />

        <Text>{props.module.label}</Text>

        <View style={styles.metric}>
          <FontAwesomeIcon
            style={styles.colorPrimary}
            size={25}
            icon={faThermometerHalf}
          />
          <Text>{props.module.currentMetric.temperature}°C</Text>
        </View>

        <View style={styles.metric}>
          <FontAwesomeIcon
            style={styles.colorPrimary}
            size={25}
            icon={faTint}
          />
          <Text>{props.module.currentMetric.humidity}%</Text>
        </View>

        <FontAwesomeIcon
          style={styles.colorPrimary}
          size={25}
          icon={faChevronRight}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    borderRadius: 25,
    elevation: 10,
    height: 70,
    justifyContent: "center",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  metric: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  colorPrimary: {
    color: "#F5DF4D",
  },
  colorSucces: {
    color: "#2ECC71",
  },
});
