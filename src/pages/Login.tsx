// Partial Libraries Imports
import { Button } from "react-native";

// Full Libraries Imports
import React from "react";

export default () => {
  return (
    <Button
      onPress={() => {
        console.log("CLICKED LOGIN BUTTON !");
      }}
      title="Login"
    />
  );
};
