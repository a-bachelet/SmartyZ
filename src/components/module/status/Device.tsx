// Partial Libraries Imports
import { View, Text, Switch, StyleSheet } from "react-native";

// Full Libraries Imports
import React, { useState } from "react";

export default () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={styles.card}
    >
      <View
        style={{
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginLeft: 45, fontWeight: 700, fontSize: 16 }}>
          Device 1
        </Text>
        <Switch
        style={{marginRight: 45}}
          trackColor={{ false: 'rgba(34, 31, 31, 0.26)', true: "#2ECC71" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#2ECC71"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
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
    paddingTop: 25,
    paddingBottom: 25,
  },
});
