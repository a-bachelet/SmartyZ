// Partial libraries Imports
import { View } from "react-native";
import { NativeRouter, Route, withRouter } from "react-router-native";

// Full Libraries Imports
import React from "react";
import Module from "./Module";

export default withRouter(({ history }) => {
  const goToModule = (id: number) => {
    history.push(`/modules/${id}`);
  };

  return (
    <NativeRouter>
      <View>
        <div>Home</div>
        <div onClick={() => goToModule(1)}>Module 1</div>
        <div onClick={() => goToModule(2)}>Module 2</div>
        <Route exact path="/modules/:id" component={Module}></Route>
      </View>
    </NativeRouter>
  );
});
