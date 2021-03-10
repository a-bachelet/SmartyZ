// Partial Libraries Imports
import { View } from "react-native";

// Full Libraries Imports
import React from "react";

export default () => {
  return (
    <View
      style={{
        borderRadius: 25,
        height: 70,
        alignItems: "left",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 10,
        justifyContent: "center",
        marginTop: 25,
        marginLeft: 14,
        marginRight: 14,
      }}
    >
      Device 1
    </View>
  );
};
