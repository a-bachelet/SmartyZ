// Full Libraries Imports
import React from "react";

export const AuthContexts = {
  loggedIn: {
    isAuthenticated: true,
  },
  loggedOut: {
    isAuthenticated: false,
  },
};

export const AuthContext = React.createContext({
  auth: AuthContexts.loggedOut,
  toggleAuth: () => {},
});
