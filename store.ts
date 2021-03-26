import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import usersReducer from "../redux/userSlice";

export const rootReducer = combineReducers({
  form: formReducer,
  user: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
