// Redux Types Imports
import {
  ModuleState,
  ModuleActionsTypes,
  FETCH_MODULES_REQUEST,
} from "./Types";

const initialState: ModuleState = {
  modules: [],
  isModulesLoading: false,
  module: null,
  isModuleLoading: false,
};

export default (
  state: ModuleState = initialState,
  action: ModuleActionsTypes
): ModuleState => {
  switch (action.type) {
    case FETCH_MODULES_REQUEST:
      return {
        modules: [...state.modules],
        isModulesLoading: false,
        module: state.module,
        isModuleLoading: false,
      };
    default:
      return state;
  }
};
