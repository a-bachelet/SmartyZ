// Full Libraries Imports
import axios from "axios";

// Partial Libraries Imports
import { StackNavigationProp } from "@react-navigation/stack";
import { Dispatch } from "redux";

// Environment Imports
import { API_URL } from "../../../env.json";

// Redux Types Imports
import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT,
} from "./Types";

// Types Imports
import User from "../../types/User";

// Navigation Imports
import { RootStackParamList } from "../../app/App";
import { CLEAR_MODULE_DATA } from "../module/Types";

export const fetchUser = (
  username: string,
  password: string,
  navigation: StackNavigationProp<RootStackParamList, "Login">
) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUserStarted());

    axios
      .post(`${API_URL}user/authenticate`, {
        username,
        password,
      })
      .then((res) => {
        dispatch(
          fetchUserSuccess({
            username: res.data.username,
            name: res.data.name,
            password,
            token: Buffer.from(`${username}:${password}`).toString("base64"),
          })
        );

        navigation.navigate("Home");
      })
      .catch((err) => {
        dispatch(fetchUserFailure());
      });
  };
};

const fetchUserStarted = () => ({
  type: FETCH_USER_STARTED,
});

const fetchUserSuccess = (user: User) => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    user,
  },
});

const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});

export const logoutUser = (navigation: StackNavigationProp<RootStackParamList, "Home">) => {
  return (dispatch: Dispatch) => {
    dispatch({type: CLEAR_MODULE_DATA});
    dispatch({type: LOGOUT});
    navigation.navigate("Login");
  };
};
