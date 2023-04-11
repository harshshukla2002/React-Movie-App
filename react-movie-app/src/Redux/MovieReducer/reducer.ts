import { Action, ReducerProps } from "../../interface";
import {
  DATA_FAILURE,
  DATA_REQUEST,
  GET_DATA,
  SEARCH_DATA_FAILURE,
} from "./actiontype";

const IntialState: ReducerProps = {
  Movies: [],
  Loading: false,
  Error: false,
};

export const reducer = (state: ReducerProps = IntialState, action: Action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, Loading: true };
    case GET_DATA:
      return { ...state, Loading: false, Movies: action.payload };
    case DATA_FAILURE:
      return { ...state, Loading: false, Error: true };
    case SEARCH_DATA_FAILURE:
      return { ...state, Loading: false, Movies: [] };
    default:
      return state;
  }
};
