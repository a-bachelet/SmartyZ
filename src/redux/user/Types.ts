// Types Imports
import User from "../../types/User";

//#region State

export interface UserState {
  user: User | null;
  isUserLoading: boolean;
  isUserError: boolean;
}

//#endregion State

//#region Requests

export const FETCH_USER_STARTED = "@user/FETCH_USER_STARTED";
export const FETCH_USER_SUCCESS = "@user/FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "@user/FETCH_USER_FAILURE";
export const LOGOUT = "@user/LOGOUT";

interface FetchUserStarted {
  type: typeof FETCH_USER_STARTED;
  payload: {};
}

interface FetchUserSuccess {
  type: typeof FETCH_USER_SUCCESS;
  payload: {
    user: User;
  };
}

interface FetchUserFailure {
  type: typeof FETCH_USER_FAILURE;
  payload: {};
}

interface Logout {
  type: typeof LOGOUT;
  payload: {};
}

//#endregion Requests

export type UserActionsTypes =
  | FetchUserStarted
  | FetchUserSuccess
  | FetchUserFailure
  | Logout;
