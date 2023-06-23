import Grid from "@mui/material/Grid";
import React from "react";
import AdminAppBar from "../components/adminAppBar";
import AdminToolbar from "../components/adminToolbar";
// import RecentNotifications from "../components/recentNotifications";
import AchievementWidget from "../widgets/achievementWidget";
import FollowersWidget from "../widgets/followersWidget";
// import MeetingWidgets from "../widgets/MeetingWidgets";
// import PersonalTargetsWidget from "../widgets/PersonalTargetsWidget";
import ViewsWidget from "../widgets/viewsWidget";
import WelcomeWidget from "../widgets/welcomeWidget";
import AdminDrawer from "../components/adminDrawer";
import NavBar from "../components/navBar";

const Home = () => {

    return (
        <>
            <NavBar/>
            <div style={{overflowY: "scroll", width: "80%", height: "100vh", overflowX: "hidden",  position: "absolute", right: "0px" }}>
            <Grid container spacing={2} style={{ marginTop: "0vh", marginLeft: "2vw"}}>
                <Grid item xs={12} md={6}>
                    <WelcomeWidget />
                    <AchievementWidget />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FollowersWidget />
                    <ViewsWidget />
                </Grid>
            </Grid>
            </div>
        </>
    );
};

export default Home;
