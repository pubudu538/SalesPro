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

import { FunctionComponent, ReactElement } from "react";
import LandingLayout from "./components/landingLayout";
import React from "react";
import { Avatar, Box, Button, Container, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import templateImage from "../../public/img/template-light.png";

const features = [
  { name: "Bootstraped with Create React App" },
  { name: "Components & Themes built on top of Material-UI" },
  { name: "Data Fetching with React Query" },
  { name: "Written in TypeScript" },
  { name: "Real-world examples" },
  { name: "Best Practices" },
  { name: "MIT License" },
];

/**
 * Landing page for the Sample.
 *
 * @param props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const LandingPage: FunctionComponent = (): ReactElement => {
  // const { userInfo } = useAuth();
  const userInfo = null;
  const theme = useTheme();
  const { t } = useTranslation();


  return (
    <LandingLayout>
      <main>
        <Box
          sx={{
            py: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="text.primary"
              marginBottom={4}
              style={{ color: theme.palette.text.primary, fontWeight: "bold"}}
            >
              {"SalesPro"}
            </Typography>
          </Container>
          <Stack
            sx={{ pt: 3 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            {userInfo ? (
              <Button
                component={RouterLink}
                to={"/admin"}
                variant="contained"
              >
                {t("Continue as John", { name: "John" })}
              </Button>
            ) : (
              <Button
                component={RouterLink}
                to={"/login"}
                variant="contained"
              >
                {t("Sign In")}
              </Button>
            )}
          </Stack>
        </Box>
        <Container sx={{ py: 6 }} maxWidth="md">
          <img
            alt="Application demo"
            src={templateImage}
            style={{
              borderRadius: 24,
              borderStyle: "solid",
              borderWidth: 4,
              borderColor: theme.palette.background.default,
              width: "100%",
            }}
          />
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Stack alignItems="center">
            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {t("Main Features")}
            </Typography>
            <List sx={{ pt: 3 }}>
              {features.map((feature, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>
                      <StarIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={feature.name} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </Container>
      </main>
    </LandingLayout>

  );
}