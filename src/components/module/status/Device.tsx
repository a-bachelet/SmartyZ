// Partial Libraries Imports
import { View, Text, Switch, StyleSheet } from "react-native";

// Full Libraries Imports
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/CombineReducers";
import { turnOnOffDevice } from "../../../redux/module/Actions";
import Module from "../../../types/Module";

export default (props: { label: string; enabled: boolean; module: Module }) => {
  const [isEnabled, setIsEnabled] = useState(props.enabled);

  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  const toggleSwitch = () => {
    dispatch(turnOnOffDevice(user?.token || "", props.module));
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.rootContainer}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{props.label}</Text>
        </View>
        <Switch
          style={styles.toggle}
          trackColor={{ false: "rgba(34, 31, 31, 0.26)", true: "#2ECC71" }}
          thumbColor={isEnabled ? "#2ECC71" : "#E74C3C"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
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
    paddingTop: 25,
    paddingBottom: 25,
  },
  subContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontWeight: "700",
    fontSize: 16,
  },
  textContainer: {
    marginLeft: 45,
  },
  toggle: {
    marginRight: 45,
  },
});
