// Redux Types Imports
import { ModuleActionsTypes, FETCH_MODULES_REQUEST } from "./Types";

// Types Imports
import Module from "../../types/Module";

export const fetchModules = (): ModuleActionsTypes => {
  return {
    type: FETCH_MODULES_REQUEST,
    payload: {},
  };
};
