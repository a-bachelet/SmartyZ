// Partial Libraries Imports
import { combineReducers } from "redux";

// Redux Reducers Imports
import ModuleReducer from "./module/Reducer";
import UserReducer from "./user/Reducer";

const rootReducer = combineReducers({
  module: ModuleReducer,
  user: UserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
