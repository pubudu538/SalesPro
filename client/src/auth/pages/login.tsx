import { Box, Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BoxedLayout from "../../core/components/boxedLayout";
import { useSnackbar } from "../../core/contexts/snackbarProvider";
//import { useAuth } from "../contexts/authProvider";
import React from "react";
import StartupImage from "../../../public/img/startupImage.png";

const Login = () => {
    //const { isLoggingIn, login } = useAuth();
    const navigate = useNavigate();
    const snackbar = useSnackbar();
    const { t } = useTranslation();
    const[isLoggingIn, setIsLoggingIn] = React.useState(false);

    const handleLogin = (email: string, password: string) => {
        if(email === "admin@example.com" && password === "admin") {
            navigate("/admin");
        } else {
            console.log("handleLogin - error");
            snackbar.error(t("common.errors.unexpected.subTitle"));
        }
    };

      const formik = useFormik({
        initialValues: {
          email: "admin@example.com",
          password: "admin",
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .email(t("common.validations.email"))
            .required(t("common.validations.required")),
          password: Yup.string()
            .min(5, t("common.validations.min", { size: 5 }))
            .required(t("common.validations.required")),
        }),
        onSubmit: (values) => handleLogin(values.email, values.password),
      });

    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: `url(${StartupImage})`,
                    backgroundRepeat: "no-repeat",
                    bgcolor: "background.default",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                style={{ backgroundColor: "#F5F5F5" }}
            >
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component="h1" variant="h5">
            {t("Sign In")}
          </Typography>
          <Box
            component="form"
            marginTop={3}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="email"
              label={t("Email Address")}
              name="email"
              autoComplete="email"
              autoFocus
              disabled={isLoggingIn}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="password"
              label={t("Password")}
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={isLoggingIn}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <LoadingButton
              type="submit"
              fullWidth
              loading={isLoggingIn}
              variant="contained"
              sx={{ mt: 3 }}
              //onClick={(e) => setIsLoggingIn(true)}
            >
              {t("Sign In")}
            </LoadingButton>
          </Box>
        </BoxedLayout>
      </Grid>
        </Grid>

    );
};

export default Login;
