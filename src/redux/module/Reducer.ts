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
} from "./Types";

const initialState: ModuleState = {
  moduleList: [],
  currentModule: null,
  currentModuleMetrics: null,
  isModuleListLoading: false,
  isModuleListError: false,
  isCurrentModuleLoading: false,
  isCurrentModuleError: false,
  isCurrentModuleMetricsLoading: false,
  isCurrentModuleMetricsError: false,
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
    default:
      return state;
  }
};
