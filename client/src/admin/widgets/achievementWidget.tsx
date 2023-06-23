import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const AchievementWidget = () => {

  return (
    <Card sx={{ bgcolor: "primary.main", color: "primary.contrastText" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "white", mb: 3 }}>
          <StarIcon color="primary" />
        </Avatar>
        <Typography gutterBottom variant="h5" component="div">
          {"Congratulations John!"}
        </Typography>
        <Typography marginBottom={3} variant="body2">
          {"You have completed 75% of your profile. Your current progress is great."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AchievementWidget;
