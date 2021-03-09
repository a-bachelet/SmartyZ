// Full Libraries Imports
import axios from "axios";

// Partial Libraries Imports
import { Dispatch } from "redux";

// Environment Imports
import { API_URL } from "../../../env.json";

// Redux Types Imports
import {
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./Types";

// Types Imports
import User from "../../types/User";

export const fetchUser = (username: String, password: String) => {
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
          })
        );
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
