// Partial Libraries Imports
import { Button } from "react-native";
import { withRouter } from "react-router-native";

// Full Libraries Imports
import React from "react";

// Contexts Imports
import { AuthContext } from "../contexts/AuthContext";

export default withRouter(({ history }) => {
  return (
    <AuthContext.Consumer>
      {({ auth, toggleAuth }) => (
        <Button
          onPress={() => {
            toggleAuth();
            history.push("/");
          }}
          title="Login"
        />
      )}
    </AuthContext.Consumer>
  );
});
