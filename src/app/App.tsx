// Partial Libraries Imports
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Redirect, Route } from "react-router-native";

// Full Libraries Imports
import React, { useState } from "react";

// Contexts Imports
import { AuthContext, AuthContexts } from "../contexts/AuthContext";

// Pages Imports
import Home from "../pages/Home";
import Login from "../pages/Login";
import Module from "../pages/Module";

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default () => {
  const [authValue, setAuthValue] = useState(AuthContexts.loggedOut);

  const toggleAuth = () => {
    setAuthValue(
      authValue.isAuthenticated ? AuthContexts.loggedOut : AuthContexts.loggedIn
    );
  };

  let authCtxState = {
    auth: authValue,
    toggleAuth,
  };

  return (
    <AuthContext.Provider value={authCtxState}>
      <NativeRouter>
        <View style={styles.container}>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={authCtxState.auth.isAuthenticated}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/modules/:id" component={Module}></Route>
          <StatusBar style="auto" />
        </View>
      </NativeRouter>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    alignItems: "center",
    justifyContent: "center",
  },
});
