import { combineReducers } from "@reduxjs/toolkit";
import musicReducer from "../app/pages/Home/slice";

const rootReducer = combineReducers({
  music: musicReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
