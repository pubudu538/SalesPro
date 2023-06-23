import { Avatar, Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import React from "react";

const data = [
    {
        name: "Jan",
        fb: 2.5,
    },
    {
        name: "Feb",
        fb: 1.4,
    },
    {
        name: "Mar",
        fb: 6,
    },
    {
        name: "Avr",
        fb: 4,
    },
];

const views = "6.967.431";

const ViewsWidget = () => {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Card sx={{ bgcolor: "#f5f5f5"}}>
            <CardContent>
                <Typography
                    align="center"
                    component="div"
                    marginBottom={2}
                    variant="body2"
                >
                    {"Views"}
                </Typography>
                <Typography align="center" component="div" variant="h5"
                    style={{ fontWeight: "bold" }}>
                    {views}
                </Typography>
                <Box sx={{ height: 224 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <XAxis
                                axisLine={false}
                                dataKey="name"
                                interval="preserveStartEnd"
                                tick={{ fill: theme.palette.text.secondary, fontSize: 12 }}
                                tickLine={false}
                            />
                            <Tooltip
                                contentStyle={{
                                    borderRadius: 16,
                                    boxShadow: theme.shadows[3],
                                    backgroundColor: theme.palette.background.paper,
                                    borderColor: theme.palette.background.paper,
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="fb"
                                fill={theme.palette.primary.main}
                                fillOpacity={0.3}
                                stroke={theme.palette.primary.main}
                                strokeWidth={6}
                                activeDot={{ r: 8 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </Box>
                <Card sx={{ mt: 5 }}>
                    <CardContent sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar>
                            <DashboardIcon />
                        </Avatar>
                        <Box sx={{ flexGrow: 1, marginLeft: "10px" }}>
                            <Typography component="div" variant="h6" sx={{fontWeight: "bold"}}>
                                {"View Dashboard"}
                            </Typography>
                        </Box>
                        <IconButton
                            aria-label="Go to dashboard"
                            component={RouterLink}
                            to={"/dashboard"}
                        >
                            <ChevronRightIcon />
                        </IconButton> 
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
};

export default ViewsWidget;
