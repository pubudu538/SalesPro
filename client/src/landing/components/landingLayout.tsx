/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AppBar, IconButton, Paper,  Toolbar, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React, { useState } from "react";
import Logo from "../../core/components/logo";
import Footer from "../../core/components/footer";
// import Footer from "../../core/components/Footer";
// import SettingsDrawer from "../../core/components/SettingsDrawer";

type LandingLayoutProps = {
  children: React.ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleSettingsToggle = () => {
    setSettingsOpen(!settingsOpen);
  };

  return (
    <Paper square>
      <AppBar color="transparent" position="relative" elevation={0}>
        <Toolbar>
          <Logo size={24} sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {"Admin"}
          </Typography>
          {/* <IconButton
            color="default"
            aria-label="settings"
            component="span"
            onClick={handleSettingsToggle}
          >
            <SettingsIcon />
          </IconButton> */}
          {/* <SettingsDrawer
            onDrawerToggle={handleSettingsToggle}
            open={settingsOpen}
          /> */}
        </Toolbar>
      </AppBar>
      <main>{children}</main>
      <Footer />
    </Paper>
  );
};

export default LandingLayout;
