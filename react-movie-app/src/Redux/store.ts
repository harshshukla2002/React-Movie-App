import { createStore } from "redux";
import { reducer as MovieReducer } from "./MovieReducer/reducer";

export const store = createStore(MovieReducer);

export type RootState = ReturnType<typeof store.getState>;
