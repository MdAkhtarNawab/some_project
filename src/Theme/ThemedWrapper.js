import React from "react";
import { useSelector } from "react-redux";
import { getTheme } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import RoutesContainer from "../Routes/RoutesContainer";
import Topbar from "../Screens/Topbar";

const ThemedWrapper = () => {
  const mode = useSelector((state) => state?.app?.theme);
  const theme = getTheme(mode);
  console.log("theme-", theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <RoutesContainer />
    </ThemeProvider>
  );
};

export default ThemedWrapper;
