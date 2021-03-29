// Redux Types Imports
import {
  UserState,
  UserActionsTypes,
  FETCH_USER_STARTED,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  LOGOUT
} from "./Types";

const initialState: UserState = {
  user: null,
  isUserLoading: false,
  isUserError: false,
};

export default (
  state: UserState = initialState,
  action: UserActionsTypes
): UserState => {
  switch (action.type) {
    case FETCH_USER_STARTED:
      return {
        ...state,
        isUserLoading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isUserLoading: false,
        isUserError: false,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isUserLoading: false,
        isUserError: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isUserLoading: false,
        isUserError: false,
      };
    default:
      return state;
  }
};
