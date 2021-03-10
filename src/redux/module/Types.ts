// Types Imports
import Module from "../../types/Module";

//#region State

export interface ModuleState {
  moduleList: Module[];
  currentModule: Module | null;
  isModuleListLoading: boolean;
  isCurrentModuleLoading: boolean;
  isModuleListError: boolean;
  isCurrentModuleError: boolean;
}

//#endregion State

//#region Requests

export const FETCH_MODULE_LIST_STARTED = "@module/FETCH_MODULE_LIST_STARTED";
export const FETCH_MODULE_LIST_SUCCESS = "@module/FETCH_MODULE_LIST_SUCCESS";
export const FETCH_MODULE_LIST_FAILURE = "@module/FETCH_MODULE_LIST_FAILURE";

export const FETCH_CURRENT_MODULE_STARTED =
  "@module/FETCH_CURRENT_MODULE_STARTED";
export const FETCH_CURRENT_MODULE_SUCCESS =
  "@module/FETCH_CURRENT_MODULE_SUCCESS";
export const FETCH_CURRENT_MODULE_FAILURE =
  "@module/FETCH_CURRENT_MODULE_FAILURE";

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

//#endregion Requests

export type ModuleActionsTypes =
  | FetchModuleListStarted
  | FetchModuleListSuccess
  | FetchModuleListFailure
  | FetchCurrentModuleStarted
  | FetchCurrentModuleSuccess
  | FetchCurrentModuleFailure;
