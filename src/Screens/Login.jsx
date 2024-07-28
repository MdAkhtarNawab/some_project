import { Box, Typography } from "@mui/material";
import React from "react";
import UITextField from "../Components/UITextField";
import UIButton from "../Components/UIButton";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const {
    control,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm({
    defaultValues: {
      userId: "",
      password: "",
    },
  });

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
          <Controller
            name="userId"
            control={control}
            rules={{ required: "User ID is required" }}
            render={({ field }) => (
              <UITextField
                {...field}
                fullWidth
                label="User ID"
                error={errors?.userId}
                helperText={errors?.userId?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <UITextField
                {...field}
                fullWidth
                label="Password"
                type="password"
                error={errors?.password}
                helperText={errors?.password?.message}
              />
            )}
          />
          <UIButton type="submit" fullWidth text="Login" />
        </Box>
      </form>
    </Box>
  );
};

export default Login;
