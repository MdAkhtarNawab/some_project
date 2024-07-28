import { Box, Typography } from "@mui/material";
import React from "react";
import UITextField from "../Components/UITextField";

const Login = () => {
  return (
    <Box>
      <Box>
        <Typography>Login</Typography>
        <UITextField />
        <UITextField />
      </Box>
    </Box>
  );
};

export default Login;
