import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

type OverviewWidgetProps = {
  color?: "primary" | "warning" | "error";
  description: string;
  title: string;
};

const OverviewWidget = ({ description, title }: OverviewWidgetProps) => {
  return (
    <Card style={{ backgroundColor: "#f5f5f5"}}>
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom component="div" variant="h3">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default OverviewWidget;
