// Types Imports
import Module from "../../types/Module";

//#region State

export interface ModuleState {
  modules: Module[];
  isModulesLoading: boolean;
  module: Module | null;
  isModuleLoading: boolean;
}

//#endregion State

//#region Requests

export const FETCH_MODULES_REQUEST = "@module/FETCH_MODULES_REQUEST";

interface FetchModulesRequest {
  type: typeof FETCH_MODULES_REQUEST;
  payload: {};
}

//#endregion Requests

export type ModuleActionsTypes = FetchModulesRequest;
