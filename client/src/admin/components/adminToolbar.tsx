import { IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import AdminDrawer from "./adminDrawer";
// import { useSettings } from "../../core/contexts/SettingsProvider";

type AdminToolbarProps = {
    children?: React.ReactNode;
    title?: string;
};

const AdminToolbar = ({ children, title }: AdminToolbarProps) => {
    //   const { toggleDrawer } = useSettings();
    const [open, setOpen] = React.useState(false);
    const collapsed = true;
    const toggleDrawer = () => {
        setOpen(!open);
      };
    const handleSettingsToggle = () => {
        setOpen(!open);
    }  

    return (
        <Toolbar sx={{ px: { xs: 3, sm: 6 } }}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
                {title}
            </Typography>
            {children}
        </Toolbar>
    );
};

export default AdminToolbar;
