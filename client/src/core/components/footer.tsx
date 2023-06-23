import { Box, Link, Typography} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {"© Sales Pro "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Footer;
