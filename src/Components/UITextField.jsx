import { Box, TextField } from "@mui/material";
import React from "react";

const UITextField = ({
  fullWidth = false,
  label = "",
  name = "",
  value = null,
  type = "text",
  onChange = new Function(),
  error = null,
  helperText=''
}) => {
  return (
    <Box sx={{ margin: "1vw" }}>
      <TextField
        fullWidth={fullWidth}
        label={label}
        name={name}
        variant="outlined"
        onChange={onChange}
        value={value}
        type={type}
        id={name}
        error={error}
        helperText={helperText}
      />
    </Box>
  );
};

export default UITextField;
