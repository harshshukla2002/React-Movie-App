export interface MoviesDataProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ReducerProps {
  Movies: MoviesDataProps[];
  Loading: boolean;
  Error: boolean;
}

export interface LoginReducerProps {
  isAuth: boolean;
  Loading: boolean;
  Error: boolean;
}

export interface ReducerActionProps {
  type: string;
  payload: MoviesDataProps[];
}

enum ActionType {
  GET_DATA = "get-data",
  DATA_REQUEST = "data-request",
  DATA_FAILURE = "data-failure",
  SEARCH_DATA_FAILURE = "search-data-failure",
}

interface actionPending {
  type: ActionType.DATA_REQUEST;
}

interface actionSuccess {
  type: ActionType.GET_DATA;
  payload: MoviesDataProps[];
}

interface actionFail {
  type: ActionType.DATA_FAILURE;
}

interface searchActionFail {
  type: ActionType.SEARCH_DATA_FAILURE;
}

export type Action =
  | actionPending
  | actionSuccess
  | actionFail
  | searchActionFail;

enum LoginActionType {
  LOGIN_SUCCESS = "login-success",
  LOGIN_REQUEST = "login-request",
}

interface loginactionPending {
  type: LoginActionType.LOGIN_REQUEST;
}

interface loginactionSuccess {
  type: LoginActionType.LOGIN_SUCCESS;
}

export type LoginAction = loginactionPending | loginactionSuccess;
