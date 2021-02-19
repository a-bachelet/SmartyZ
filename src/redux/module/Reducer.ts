// Redux Types Imports
import {
  ModuleState,
  ModuleActionsTypes,
  FETCH_MODULES_REQUEST,
} from "./Types";

const initialState: ModuleState = {
  data: [],
  isLoading: false,
};

export default (
  state: ModuleState = initialState,
  action: ModuleActionsTypes
): ModuleState => {
  switch (action.type) {
    case FETCH_MODULES_REQUEST:
      return {
        data: [...state.data],
        isLoading: state.isLoading,
      };
    default:
      return state;
  }
};
