// Partial libraries Imports
import { View } from "react-native";
import { NativeRouter, Route, withRouter } from "react-router-native";

// Full Libraries Imports
import React from "react";

export default withRouter(({ history }) => {
  const goToModule = (id: number) => {
    history.push(`/modules/${id}`);
  };

  return (
    <View>
      <div>Home</div>
      <div onClick={() => goToModule(1)}>Module 1</div>
      <div onClick={() => goToModule(2)}>Module 2</div>
    </View>
  );
});
