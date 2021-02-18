// Full Libraries Imports
import React from "react";
import { withRouter } from "react-router-native";

// Contexts Imports
import { AuthContext } from "../contexts/AuthContext";

export default withRouter(({ history }) => {
  return (
    <AuthContext.Consumer>
      {({ auth, toggleAuth }) => (
        <button
          onClick={() => {
            toggleAuth();
            history.push("/");
          }}
        >
          Login
        </button>
      )}
    </AuthContext.Consumer>
  );
});
