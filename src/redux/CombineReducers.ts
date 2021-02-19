// Partial Libraries Imports
import { combineReducers } from "redux";

// Redux Reducers Imports
import ModuleReducer from "./module/Reducer";

const rootReducer = combineReducers({
  module: ModuleReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
