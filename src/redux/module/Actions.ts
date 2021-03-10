// Full Libraries Imports
import axios from "axios";

// Partial Libraries Imports
import { Dispatch } from "redux";

// Environment Imports
import { API_URL } from "../../../env.json";

// Redux Types Imports
import {
  DELETE_ALERT_FAILURE,
  DELETE_ALERT_STARTED,
  DELETE_ALERT_SUCCESS,
  FETCH_CURRENT_MODULE_ALERTS_FAILURE,
  FETCH_CURRENT_MODULE_ALERTS_STARTED,
  FETCH_CURRENT_MODULE_ALERTS_SUCCESS,
  FETCH_CURRENT_MODULE_FAILURE,
  FETCH_CURRENT_MODULE_METRICS_FAILURE,
  FETCH_CURRENT_MODULE_METRICS_STARTED,
  FETCH_CURRENT_MODULE_METRICS_SUCCESS,
  FETCH_CURRENT_MODULE_STARTED,
  FETCH_CURRENT_MODULE_SUCCESS,
  FETCH_MODULE_LIST_FAILURE,
  FETCH_MODULE_LIST_STARTED,
  FETCH_MODULE_LIST_SUCCESS,
} from "./Types";

// Types Imports
import Module from "../../types/Module";
import Metric from "../../types/Metric";
import Alert from "../../types/Alert";

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
        const moduleList = res.data.map((m: any) => {
          return {
            id: m.id,
            code: m.code,
            label: m.name,
            currentMetric: {
              temperature: parseFloat(m.temperature).toFixed(2),
              humidity: parseFloat(m.humidity).toFixed(2),
            },
          };
        });
        dispatch(fetchModuleListSuccess(moduleList));
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

export const fetchCurrentModuleMetrics = (token: string, id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCurrentModuleMetricsStarted());

    axios
      .get(`${API_URL}module/${id}/metric`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        dispatch(fetchCurrentModuleMetricsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCurrentModuleMetricsFailure());
      });
  };
};

const fetchCurrentModuleMetricsStarted = () => ({
  type: FETCH_CURRENT_MODULE_METRICS_STARTED,
});

const fetchCurrentModuleMetricsSuccess = (metrics: Metric | null) => ({
  type: FETCH_CURRENT_MODULE_METRICS_SUCCESS,
  payload: {
    metrics,
  },
});

const fetchCurrentModuleMetricsFailure = () => ({
  type: FETCH_CURRENT_MODULE_METRICS_FAILURE,
});

export const fetchCurrentModuleAlerts = (token: string, id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCurrentModuleAlertsStarted());

    axios
      .get(`${API_URL}module/${id}/alerts`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        dispatch(fetchCurrentModuleAlertsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCurrentModuleAlertsFailure());
      });
  };
};

const fetchCurrentModuleAlertsStarted = () => ({
  type: FETCH_CURRENT_MODULE_ALERTS_STARTED,
});

const fetchCurrentModuleAlertsSuccess = (alerts: Alert[]) => ({
  type: FETCH_CURRENT_MODULE_ALERTS_SUCCESS,
  payload: {
    alerts,
  },
});

const fetchCurrentModuleAlertsFailure = () => ({
  type: FETCH_CURRENT_MODULE_ALERTS_FAILURE,
});

export const deleteAlert = (
  token: string,
  moduleId: string,
  alertId: string
) => {
  return (dispatch: Dispatch) => {
    dispatch(deleteAlertStarted());

    axios
      .delete(`${API_URL}module/${moduleId}/alerts/${alertId}`, {
        headers: {
          Authorization: `Basic ${token}`,
        },
      })
      .then((res) => {
        dispatch(deleteAlertSuccess());
      })
      .catch((err) => {
        dispatch(deleteAlertFailure());
      });
  };
};

const deleteAlertStarted = () => ({
  type: DELETE_ALERT_STARTED,
});

const deleteAlertSuccess = () => ({
  type: DELETE_ALERT_SUCCESS,
});

const deleteAlertFailure = () => ({
  type: DELETE_ALERT_FAILURE,
});
