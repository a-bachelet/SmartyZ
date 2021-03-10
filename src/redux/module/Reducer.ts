// Redux Types Imports
import {
  ModuleState,
  ModuleActionsTypes,
  FETCH_MODULE_LIST_STARTED,
  FETCH_MODULE_LIST_SUCCESS,
  FETCH_MODULE_LIST_FAILURE,
  FETCH_CURRENT_MODULE_STARTED,
  FETCH_CURRENT_MODULE_SUCCESS,
  FETCH_CURRENT_MODULE_FAILURE,
  FETCH_CURRENT_MODULE_METRICS_STARTED,
  FETCH_CURRENT_MODULE_METRICS_SUCCESS,
  FETCH_CURRENT_MODULE_METRICS_FAILURE,
  FETCH_CURRENT_MODULE_ALERTS_STARTED,
  FETCH_CURRENT_MODULE_ALERTS_SUCCESS,
  FETCH_CURRENT_MODULE_ALERTS_FAILURE,
  DELETE_ALERT_STARTED,
  DELETE_ALERT_SUCCESS,
  DELETE_ALERT_FAILURE,
} from "./Types";

const initialState: ModuleState = {
  moduleList: [],
  currentModule: null,
  currentModuleMetrics: null,
  currentModuleAlerts: [],
  isModuleListLoading: false,
  isModuleListError: false,
  isCurrentModuleLoading: false,
  isCurrentModuleAlertsLoading: false,
  isDeleteAlertLoading: true,
  isCurrentModuleError: false,
  isCurrentModuleMetricsLoading: false,
  isCurrentModuleMetricsError: false,
  isCurrentModuleAlertsError: false,
  isDeleteAlertError: false,
};

export default (
  state: ModuleState = initialState,
  action: ModuleActionsTypes
): ModuleState => {
  switch (action.type) {
    case FETCH_MODULE_LIST_STARTED:
      return {
        ...state,
        isModuleListLoading: true,
        isModuleListError: false,
      };
    case FETCH_MODULE_LIST_SUCCESS:
      return {
        ...state,
        moduleList: action.payload.moduleList,
        isModuleListLoading: false,
      };
    case FETCH_MODULE_LIST_FAILURE:
      return {
        ...state,
        isModuleListLoading: false,
        isModuleListError: true,
      };
    case FETCH_CURRENT_MODULE_STARTED:
      return {
        ...state,
        isCurrentModuleLoading: true,
        isCurrentModuleError: false,
      };
    case FETCH_CURRENT_MODULE_SUCCESS:
      return {
        ...state,
        currentModule: action.payload.currentModule,
        isCurrentModuleLoading: false,
        isCurrentModuleError: false,
      };
    case FETCH_CURRENT_MODULE_FAILURE:
      return {
        ...state,
        isCurrentModuleLoading: false,
        isCurrentModuleError: true,
      };
    case FETCH_CURRENT_MODULE_METRICS_STARTED:
      return {
        ...state,
        isCurrentModuleMetricsLoading: true,
        isCurrentModuleMetricsError: false,
      };
    case FETCH_CURRENT_MODULE_METRICS_SUCCESS:
      return {
        ...state,
        currentModuleMetrics: action.payload.metrics,
        isCurrentModuleMetricsLoading: false,
        isCurrentModuleMetricsError: false,
      };
    case FETCH_CURRENT_MODULE_METRICS_FAILURE:
      return {
        ...state,
        isCurrentModuleMetricsLoading: false,
        isCurrentModuleMetricsError: true,
      };
    case FETCH_CURRENT_MODULE_ALERTS_STARTED:
      return {
        ...state,
        isCurrentModuleAlertsLoading: true,
        isCurrentModuleAlertsError: false,
      };
    case FETCH_CURRENT_MODULE_ALERTS_SUCCESS:
      return {
        ...state,
        currentModuleAlerts: action.payload.alerts,
        isCurrentModuleAlertsLoading: false,
        isCurrentModuleAlertsError: false,
      };
    case FETCH_CURRENT_MODULE_ALERTS_FAILURE:
      return {
        ...state,
        isCurrentModuleAlertsLoading: false,
        isCurrentModuleAlertsError: true,
      };
    case DELETE_ALERT_STARTED:
      return {
        ...state,
        isDeleteAlertLoading: true,
        isDeleteAlertError: false,
      };
    case DELETE_ALERT_SUCCESS:
      return {
        ...state,
        isDeleteAlertLoading: false,
        isDeleteAlertError: false,
      };
    case DELETE_ALERT_FAILURE:
      return {
        ...state,
        isDeleteAlertLoading: false,
        isDeleteAlertError: true,
      };
    default:
      return state;
  }
};
