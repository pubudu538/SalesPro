import { AppBar, IconButton, Toolbar } from "@mui/material";
import { drawerCollapsedWidth, drawerWidth } from "../../../src/core/config/layout";
import React from "react";
// import { useSettings } from "../../core/contexts/SettingsProvider";

type AdminAppBarProps = {
  children: React.ReactNode;
};

const AdminAppBar = ({ children }: AdminAppBarProps) => {
//   const { collapsed } = useSettings();
  //const width = collapsed ? drawerCollapsedWidth : drawerWidth;
  const width = drawerCollapsedWidth;

  return (
    <AppBar
      color="default"
      position="fixed"
      elevation={0}
      sx={{
        width: { lg: `calc(100% - ${width}px)` },
        marginLeft: { lg: width },
      }}
    >
      {children}
    </AppBar>
  );
};

export default AdminAppBar;
