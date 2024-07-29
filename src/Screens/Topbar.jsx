import { Box } from "@mui/material";
import React from "react";
import UIThemeSwitch from "../Components/UIThemeSwitch";

const Topbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "4vw",
        border: "1px solid red",
        // textAlign: "right",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
      }}
    >
      <Box sx={{marginRight:'2vw'}}>

      <UIThemeSwitch />
      </Box>
    </Box>
  );
};

export default Topbar;
