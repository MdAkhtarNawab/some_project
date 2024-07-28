import { Box, Button } from "@mui/material";
import React from "react";

const UIButton = ({ fullWidth = false, text = "" , type='button'}) => {
  return (
    <Box sx={{ margin: "1vw" }}>
      <Button type={type} variant="contained" fullWidth={fullWidth}>
        {text}
      </Button>
    </Box>
  );
};

export default UIButton;
