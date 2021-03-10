// Full Libraries Imports
import axios from "axios";

// Partial Libraries Imports
import { Dispatch } from "redux";

// Environment Imports
import { API_URL } from "../../../env.json";

// Redux Types Imports
import {
  FETCH_CURRENT_MODULE_FAILURE,
  FETCH_CURRENT_MODULE_STARTED,
  FETCH_CURRENT_MODULE_SUCCESS,
  FETCH_MODULE_LIST_FAILURE,
  FETCH_MODULE_LIST_STARTED,
  FETCH_MODULE_LIST_SUCCESS,
} from "./Types";

// Types Imports
import Module from "../../types/Module";

export const fetchModuleList = (token: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchModuleListStarted());

    axios
      .get(`${API_URL}module`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        dispatch(fetchModuleListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchModuleListFailure());
      });
  };
};

const fetchModuleListStarted = () => ({
  type: FETCH_MODULE_LIST_STARTED,
});

const fetchModuleListSuccess = (moduleList: Module[]) => ({
  type: FETCH_MODULE_LIST_SUCCESS,
  payload: {
    moduleList,
  },
});

const fetchModuleListFailure = () => ({
  type: FETCH_MODULE_LIST_FAILURE,
});

export const fetchCurrentModule = (token: string, id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCurrentModuleStarted());

    axios
      .get(`${API_URL}module/${id}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        dispatch(fetchCurrentModuleSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCurrentModuleFailure());
      });
  };
};

const fetchCurrentModuleStarted = () => ({
  type: FETCH_CURRENT_MODULE_STARTED,
});

const fetchCurrentModuleSuccess = (currentModule: Module | null) => ({
  type: FETCH_CURRENT_MODULE_SUCCESS,
  payload: {
    currentModule,
  },
});

const fetchCurrentModuleFailure = () => ({
  type: FETCH_CURRENT_MODULE_FAILURE,
});
