// Redux Types Imports
import Alert from "../../types/Alert";
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
  EDIT_MODULE_NAME_STARTED,
  EDIT_MODULE_NAME_SUCCESS,
  EDIT_MODULE_NAME_FAILURE,
  FETCH_CURRENT_MODULE_ANALYTICS_STARTED,
  FETCH_CURRENT_MODULE_ANALYTICS_SUCCESS,
  FETCH_CURRENT_MODULE_ANALYTICS_FAILURE,
  FETCH_CURRENT_MODULE_ALERTS_COUNT_STARTED,
  FETCH_CURRENT_MODULE_ALERTS_COUNT_SUCCESS,
  FETCH_CURRENT_MODULE_ALERTS_COUNT_FAILURE,
  CLEAR_MODULE_DATA,
} from "./Types";

const initialState: ModuleState = {
  moduleList: [],
  currentModule: null,
  currentModuleMetrics: null,
  currentModuleAlerts: [],
  currentModuleAnalytics: [],
  currentModuleAlertsCount: 0,
  isModuleListLoading: false,
  isModuleListError: false,
  isCurrentModuleLoading: false,
  isCurrentModuleAlertsLoading: false,
  isDeleteAlertLoading: false,
  isEditingModuleNameLoading: false,
  isCurrentModuleAnalyticsLoading: false,
  isCurrentModuleError: false,
  isCurrentModuleMetricsLoading: false,
  isCurrentModuleMetricsError: false,
  isCurrentModuleAlertsError: false,
  isDeleteAlertError: false,
  isEditingModuleNameError: false,
  isCurrentModuleAnalyticsError: false,
  isCurrentModuleAlertsCountLoading: false,
  isCurrentModuleAlertsCountError: false,
};

export default (
  state: ModuleState = initialState,
  action: ModuleActionsTypes
): ModuleState => {
  switch (action.type) {
    case CLEAR_MODULE_DATA:
      return {
        ...state,
        moduleList: [],
        currentModule: null,
        currentModuleMetrics: null,
        currentModuleAlerts: [],
        currentModuleAnalytics: [],
        currentModuleAlertsCount: 0,
        isModuleListLoading: false,
        isModuleListError: false,
        isCurrentModuleLoading: false,
        isCurrentModuleAlertsLoading: false,
        isDeleteAlertLoading: false,
        isEditingModuleNameLoading: false,
        isCurrentModuleAnalyticsLoading: false,
        isCurrentModuleError: false,
        isCurrentModuleMetricsLoading: false,
        isCurrentModuleMetricsError: false,
        isCurrentModuleAlertsError: false,
        isDeleteAlertError: false,
        isEditingModuleNameError: false,
        isCurrentModuleAnalyticsError: false,
        isCurrentModuleAlertsCountLoading: false,
        isCurrentModuleAlertsCountError: false,
      };
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
        isCurrentModuleAlertsCountLoading: true,
        isCurrentModuleAlertsLoading: true,
        isCurrentModuleAlertsError: false,
      };
    case FETCH_CURRENT_MODULE_ALERTS_SUCCESS:
      return {
        ...state,
        currentModuleAlerts: action.payload.alerts,
        currentModuleAlertsCount: action.payload.alerts.length,
        isCurrentModuleAlertsCountLoading: false,
        isCurrentModuleAlertsLoading: false,
        isCurrentModuleAlertsError: false,
      };
    case FETCH_CURRENT_MODULE_ALERTS_FAILURE:
      return {
        ...state,
        isCurrentModuleAlertsCountLoading: false,
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
      const newAlerts = state.currentModuleAlerts;
      newAlerts.splice(
        newAlerts.findIndex((a) => a.id === action.payload.alertId),
        1
      );
      return {
        ...state,
        currentModuleAlerts: [...newAlerts],
        currentModuleAlertsCount: newAlerts.length,
        isDeleteAlertLoading: false,
        isDeleteAlertError: false,
      };
    case DELETE_ALERT_FAILURE:
      return {
        ...state,
        isDeleteAlertLoading: false,
        isDeleteAlertError: true,
      };
    case EDIT_MODULE_NAME_STARTED:
      return {
        ...state,
        isEditingModuleNameLoading: true,
        isEditingModuleNameError: false,
      };
    case EDIT_MODULE_NAME_SUCCESS:
      return {
        ...state,
        moduleList: state.moduleList.map((module) => {
          if (module.id === action.payload.module.id) {
            module.label = action.payload.module.label;
          }

          return module;
        }),
        currentModule: action.payload.module,
        isEditingModuleNameLoading: false,
        isEditingModuleNameError: false,
      };
    case EDIT_MODULE_NAME_FAILURE:
      return {
        ...state,
        isEditingModuleNameLoading: false,
        isEditingModuleNameError: true,
      };
    case FETCH_CURRENT_MODULE_ANALYTICS_STARTED:
      return {
        ...state,
        isCurrentModuleAlertsLoading: true,
        isCurrentModuleAnalyticsError: false,
      };
    case FETCH_CURRENT_MODULE_ANALYTICS_SUCCESS:
      return {
        ...state,
        isCurrentModuleAnalyticsLoading: false,
        isCurrentModuleAnalyticsError: false,
        currentModuleAnalytics: action.payload.analytics,
      };
    case FETCH_CURRENT_MODULE_ANALYTICS_FAILURE:
      return {
        ...state,
        isCurrentModuleAnalyticsLoading: false,
        isCurrentModuleAnalyticsError: true,
      };
    case FETCH_CURRENT_MODULE_ALERTS_COUNT_STARTED:
      return {
        ...state,
        isCurrentModuleAlertsCountLoading: true,
        isCurrentModuleAlertsCountError: false,
      };
    case FETCH_CURRENT_MODULE_ALERTS_COUNT_SUCCESS:
      return {
        ...state,
        currentModuleAlertsCount: action.payload.count,
        isCurrentModuleAlertsCountLoading: false,
        isCurrentModuleAlertsCountError: false,
      };
    case FETCH_CURRENT_MODULE_ALERTS_COUNT_FAILURE:
      return {
        ...state,
        isCurrentModuleAlertsCountLoading: false,
        isCurrentModuleAlertsCountError: true,
      };
    default:
      return state;
  }
};
