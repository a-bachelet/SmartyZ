// Partial libraries Imports
import { View, Text, Pressable } from "react-native";

// Full Libraries Imports
import React from "react";

export default () => {
  const goToModule = (id: number) => {
    console.log(id);
  };

  return (
    <View>
      <View>
        <Text>Home</Text>
      </View>
      <Pressable onPress={() => goToModule(1)}>
        <Text>Module 1</Text>
      </Pressable>
      <Pressable onPress={() => goToModule(2)}>
        <Text>Module 2</Text>
      </Pressable>
    </View>
  );
};
