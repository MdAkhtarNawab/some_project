import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routesHelper } from "./Routes_helper";
import PageNotFound from "../Screens/PageNotFound";
import ProtectedRoute from "./ProtectedRoute";
import LoginRoute from "./LoginRoute";
const LoginScreen = lazy(() => import("../Screens/Login"));

const RoutesContainer = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginRoute>
            <LoginScreen />
          </LoginRoute>
        }
      />
      {routesHelper?.map((route, index) => {
        return (
          <Route
            key={index}
            path={route?.route}
            element={<ProtectedRoute>{route?.element}</ProtectedRoute>}
          />
        );
      })}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RoutesContainer;
