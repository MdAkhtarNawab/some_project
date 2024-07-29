import { Box, Typography } from "@mui/material";
import React from "react";
import UITextField from "../Components/UITextField";
import UIButton from "../Components/UIButton";
import { useForm } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit } = useForm();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <form
        onSubmit={handleSubmit((data) => {
          console.log("data---", data);
        })}
      >
        <Box
          sx={{ border: "1px solid", width: "40vw", padding: "1vw 5vw 3vw" }}
        >
          <Typography>Login</Typography>
          <UITextField
            control={control}
            rules={{ required: "User ID is required" }}
            name="userId"
            fullWidth
            label="User ID"
          />
          <UITextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
          />
          <UIButton type="submit" fullWidth text="Login" />
        </Box>
      </form>
    </Box>
  );
};

export default Login;
