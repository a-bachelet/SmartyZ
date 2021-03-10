// Partial libraries Imports
import { View, Text, Pressable } from "react-native";

// Full Libraries Imports
import React from "react";
import Module from "../components/home/Module";

export default () => {
  const goToModule = (id: number) => {
    console.log(id);
  };

  return (
    <View style={{ height: "100%", backgroundColor: "#3B3B3B" }}>
      <View style={{ alignItems: "center"}}>
        <Text style={{ color: "#FFFFFF", fontWeight: '500', fontSize: '24px', marginTop: '35px'  }}>Hyacinthe Briand</Text>
      </View>

      <View
        style={{
          marginTop: "calc(100px - 35px - 24px)",
          height: "calc(100% - 110px)",
          paddingTop: "15px",
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          backgroundColor: "#FEFEFE",
        }}
      >
        <Module></Module>
        <Module></Module>
        <Module></Module>
        <Module></Module>
      </View>
    </View>
  );
};
