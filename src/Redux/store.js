import { combineReducers } from "redux";
import authReducer from "./Reducers/AuthReducer";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import appReducer from "./Reducers/AppReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()?.concat(thunk),
});

export default store;
