import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginRoute = ({ children }) => {
  const isUserAuthenticated = useSelector(
    (state) => state?.auth?.isUserLoggedIn?.isUserAuthenticated
  );
  const bypass = localStorage?.getItem("bypass");
  return !isUserAuthenticated && !bypass ? children : <Navigate to={"/"} />;
};

export default LoginRoute;
