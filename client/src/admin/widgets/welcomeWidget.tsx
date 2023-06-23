import { Card, CardContent, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
// import { useAuth } from "../../auth/contexts/AuthProvider";
// import { ReactComponent as WelcomeSvg } from "../../core/assets/welcome.svg";
// import SvgContainer from "../../core/components/SvgContainer";
import React from "react";
import welcomeImage from "../../core/assets/welcome.png";

const WelcomeWidget = () => {
  //const { userInfo } = useAuth();
  const { t } = useTranslation();

  return (
    <Card elevation={0} sx={{ backgroundColor: "transparent", mb: 2 }}>
      <CardContent>
        <Typography component="div" gutterBottom variant="h4"
        sx={{ fontWeight: "bold", color: "#696868"}}>
          {t("Hi John")}
        </Typography>
        <Typography
          component="div"
          sx={{ fontWeight: 300, mb: 3, color: "#696868" }}
          variant="h4"
        >
          {t("Welcome Back!")}
        </Typography>
        <Typography
          color="textSecondary"
          component="p"
          gutterBottom
          marginBottom={2}
          variant="subtitle1"
        >
          {t("This page is designed to give some important information about the application. Let's make someting together!")}
        </Typography>
        <img
            alt="Application demo"
            src={welcomeImage}
            style={{
              borderRadius: 24,
              borderStyle: "none",
              borderWidth: 4,
              width: "100%",
            }}
          />
      </CardContent>
    </Card>
  );
};

export default WelcomeWidget;
