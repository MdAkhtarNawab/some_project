import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()?.concat(thunk),
});

export default store;
