// Types Imports
import Alert from "../../types/Alert";
import { Analytic } from "../../types/Analytic";
import Metric from "../../types/Metric";
import Module from "../../types/Module";

//#region State

export interface ModuleState {
  moduleList: Module[];
  currentModule: Module | null;
  currentModuleMetrics: Metric | null;
  currentModuleAlerts: Alert[];
  currentModuleAnalytics: Analytic[];
  currentModuleAlertsCount: number;
  isModuleListLoading: boolean;
  isCurrentModuleLoading: boolean;
  isCurrentModuleMetricsLoading: boolean;
  isCurrentModuleAlertsLoading: boolean;
  isDeleteAlertLoading: boolean;
  isEditingModuleNameLoading: boolean;
  isCurrentModuleAnalyticsLoading: boolean;
  isCurrentModuleAlertsCountLoading: boolean;
  isModuleListError: boolean;
  isCurrentModuleError: boolean;
  isCurrentModuleMetricsError: boolean;
  isCurrentModuleAlertsError: boolean;
  isDeleteAlertError: boolean;
  isEditingModuleNameError: boolean;
  isCurrentModuleAnalyticsError: boolean;
  isCurrentModuleAlertsCountError: boolean;
}

//#endregion State

//#region Requests

export const CLEAR_MODULE_DATA = "@module/CLEAR_DATA";
export const FETCH_MODULE_LIST_STARTED = "@module/FETCH_MODULE_LIST_STARTED";
export const FETCH_MODULE_LIST_SUCCESS = "@module/FETCH_MODULE_LIST_SUCCESS";
export const FETCH_MODULE_LIST_FAILURE = "@module/FETCH_MODULE_LIST_FAILURE";

export const FETCH_CURRENT_MODULE_STARTED =
  "@module/FETCH_CURRENT_MODULE_STARTED";
export const FETCH_CURRENT_MODULE_SUCCESS =
  "@module/FETCH_CURRENT_MODULE_SUCCESS";
export const FETCH_CURRENT_MODULE_FAILURE =
  "@module/FETCH_CURRENT_MODULE_FAILURE";

export const FETCH_CURRENT_MODULE_METRICS_STARTED =
  "@module/FETCH_CURRENT_MODULE_METRICS_STARTED";
export const FETCH_CURRENT_MODULE_METRICS_SUCCESS =
  "@module/FETCH_CURRENT_MODULE_METRICS_SUCCESS";
export const FETCH_CURRENT_MODULE_METRICS_FAILURE =
  "@module/FETCH_CURRENT_MODULE_METRICS_FAILURE";

export const FETCH_CURRENT_MODULE_ALERTS_STARTED =
  "@module/FETCH_CURRENT_MODULE_ALERTS_STARTED";

export const FETCH_CURRENT_MODULE_ALERTS_SUCCESS =
  "@module/FETCH_CURRENT_MODULE_ALERTS_SUCCESS";

export const FETCH_CURRENT_MODULE_ALERTS_FAILURE =
  "@module/FETCH_CURRENT_MODULE_ALERTS_FAILURE";

export const DELETE_ALERT_STARTED = "@module/DELETE_ALERT_STARTED";
export const DELETE_ALERT_SUCCESS = "@module/DELETE_ALERT_SUCCESS";
export const DELETE_ALERT_FAILURE = "@module/DELETE_ALERT_FAILURE";

export const EDIT_MODULE_NAME_STARTED = "@module/EDIT_MODULE_NAME_STARTED";
export const EDIT_MODULE_NAME_SUCCESS = "@module/EDIT_MODULE_NAME_SUCCESS";
export const EDIT_MODULE_NAME_FAILURE = "@module/EDIT_MODULE_NAME_FAILURE";

export const FETCH_CURRENT_MODULE_ANALYTICS_STARTED =
  "@module/FETCH_CURRENT_MODULE_ANALYTICS_STARTED";
export const FETCH_CURRENT_MODULE_ANALYTICS_SUCCESS =
  "@module/FETCH_CURRENT_MODULE_ANALYTICS_SUCCESS";
export const FETCH_CURRENT_MODULE_ANALYTICS_FAILURE =
  "@module/FETCH_CURRENT_MODULE_ANALYTICS_FAILURE";

export const FETCH_CURRENT_MODULE_ALERTS_COUNT_STARTED =
  "@module/FETCH_CURRENT_MODULE_ALERTS_COUNT_STARTED";
export const FETCH_CURRENT_MODULE_ALERTS_COUNT_SUCCESS =
  "@module/FETCH_CURRENT_MODULE_ALERTS_COUNT_SUCCESS";
export const FETCH_CURRENT_MODULE_ALERTS_COUNT_FAILURE =
  "@module/FETCH_CURRENT_MODULE_ALERTS_COUNT_FAILURE";

interface ClearData {
  type: typeof CLEAR_MODULE_DATA;
  payload: {};
}

interface FetchModuleListStarted {
  type: typeof FETCH_MODULE_LIST_STARTED;
  payload: {};
}

interface FetchModuleListSuccess {
  type: typeof FETCH_MODULE_LIST_SUCCESS;
  payload: {
    moduleList: Module[];
  };
}

interface FetchModuleListFailure {
  type: typeof FETCH_MODULE_LIST_FAILURE;
  payload: {};
}

interface FetchCurrentModuleStarted {
  type: typeof FETCH_CURRENT_MODULE_STARTED;
  payload: {};
}

interface FetchCurrentModuleSuccess {
  type: typeof FETCH_CURRENT_MODULE_SUCCESS;
  payload: {
    currentModule: Module | null;
  };
}

interface FetchCurrentModuleFailure {
  type: typeof FETCH_CURRENT_MODULE_FAILURE;
  payload: {};
}

interface FetchCurrentModuleMetricsStarted {
  type: typeof FETCH_CURRENT_MODULE_METRICS_STARTED;
  payload: {};
}

interface FetchCurrentModuleMetricsSuccess {
  type: typeof FETCH_CURRENT_MODULE_METRICS_SUCCESS;
  payload: {
    metrics: Metric | null;
  };
}

interface FetchCurrentModuleMetricsFailure {
  type: typeof FETCH_CURRENT_MODULE_METRICS_FAILURE;
  payload: {};
}

interface FetchCurrentModuleAlertsStarted {
  type: typeof FETCH_CURRENT_MODULE_ALERTS_STARTED;
  payload: {};
}

interface FetchCurrentModuleAlertsSuccess {
  type: typeof FETCH_CURRENT_MODULE_ALERTS_SUCCESS;
  payload: {
    alerts: Alert[];
  };
}

interface FetchCurrentModuleAlertsFailure {
  type: typeof FETCH_CURRENT_MODULE_ALERTS_FAILURE;
  payload: {};
}

interface DeleteAlertStarted {
  type: typeof DELETE_ALERT_STARTED;
  payload: {};
}

interface DeleteAlertSuccess {
  type: typeof DELETE_ALERT_SUCCESS;
  payload: {
    alertId: string;
  };
}

interface DeleteAlertFailure {
  type: typeof DELETE_ALERT_FAILURE;
  payload: {};
}

interface EditModuleNameStarted {
  type: typeof EDIT_MODULE_NAME_STARTED;
  payload: {};
}

interface EditModuleNameSuccess {
  type: typeof EDIT_MODULE_NAME_SUCCESS;
  payload: { module: Module };
}

interface EditModuleNameFailure {
  type: typeof EDIT_MODULE_NAME_FAILURE;
  payload: {};
}

interface FetchCurrentModuleAnalyticsStarted {
  type: typeof FETCH_CURRENT_MODULE_ANALYTICS_STARTED;
  payload: {};
}

interface FetchCurrentModuleAnalyticsSuccess {
  type: typeof FETCH_CURRENT_MODULE_ANALYTICS_SUCCESS;
  payload: { analytics: Analytic[] };
}

interface FetchCurrentModuleAnalyticsFailure {
  type: typeof FETCH_CURRENT_MODULE_ANALYTICS_FAILURE;
  payload: {};
}

interface FetchCurrentModuleAlertsCountStarted {
  type: typeof FETCH_CURRENT_MODULE_ALERTS_COUNT_STARTED;
  payload: {};
}

interface FetchCurrentModuleAlertsCountSuccess {
  type: typeof FETCH_CURRENT_MODULE_ALERTS_COUNT_SUCCESS;
  payload: {
    count: number;
  };
}

interface FetchCurrentModuleAlertsCountFailure {
  type: typeof FETCH_CURRENT_MODULE_ALERTS_COUNT_FAILURE;
  payload: {};
}

//#endregion Requests

export type ModuleActionsTypes =
  | ClearData
  | FetchModuleListStarted
  | FetchModuleListSuccess
  | FetchModuleListFailure
  | FetchCurrentModuleStarted
  | FetchCurrentModuleSuccess
  | FetchCurrentModuleFailure
  | FetchCurrentModuleMetricsStarted
  | FetchCurrentModuleMetricsSuccess
  | FetchCurrentModuleMetricsFailure
  | FetchCurrentModuleAlertsStarted
  | FetchCurrentModuleAlertsSuccess
  | FetchCurrentModuleAlertsFailure
  | DeleteAlertStarted
  | DeleteAlertSuccess
  | DeleteAlertFailure
  | EditModuleNameStarted
  | EditModuleNameSuccess
  | EditModuleNameFailure
  | FetchCurrentModuleAnalyticsStarted
  | FetchCurrentModuleAnalyticsSuccess
  | FetchCurrentModuleAnalyticsFailure
  | FetchCurrentModuleAlertsCountStarted
  | FetchCurrentModuleAlertsCountSuccess
  | FetchCurrentModuleAlertsCountFailure;
