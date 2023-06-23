import { Grid } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../components/navBar";
// import AdminAppBar from "../components/AdminAppBar";
// import AdminToolbar from "../components/AdminToolbar";
import ActivityWidget from "../widgets/activityWidget";
import BudgetWidget from "../widgets/budgetWidget";
import CircleProgressWidget from "../widgets/circleProgressWidget";
import OverviewWidget from "../widgets/overviewWidget";
import ProgressWidget from "../widgets/progressWidget";
// import SalesByAgeWidget from "../widgets/SalesByAgeWidget";
// import SalesByCategoryWidget from "../widgets/SalesByCategoryWidget";
import SalesHistoryWidget from "../widgets/salesHistoryWidget";
// import TeamProgressWidget from "../widgets/TeamProgressWidget";
// import UsersWidget from "../widgets/UsersWidget";

const overviewItems = [
    {
        unit: "Visits",
        value: "20 700",
    },
    {
        unit: "Sales",
        value: "$ 1 550",
    },
    {
        unit: "Orders",
        value: "149",
    },
    {
        unit: "Users",
        value: "657",
    },
];

const Dashboard = () => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <NavBar />
            <div style={{ overflowY: "scroll", width: "75%", height: "100vh", overflowX: "hidden", position: "absolute", right: "0px" }}>
                <Grid container spacing={2}>
                    {overviewItems.map((item, index) => (
                        <Grid key={index} item xs={6} md={3}>
                            <OverviewWidget description={t(item.unit)} title={item.value} />
                        </Grid>
                    ))}
                    <Grid item xs={12} md={8}>
                        <ActivityWidget />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <BudgetWidget />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <SalesHistoryWidget value={567} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ProgressWidget
                            avatar={<SupervisorAccountIcon />}
                            mb={2}
                            title={"Visits"}
                            value={75}
                        />
                        <ProgressWidget
                            avatar={<ShoppingBasketIcon />}
                            mb={2}
                            title={"Orders"}
                            value={50}
                        />
                        <ProgressWidget
                            avatar={<AttachMoneyIcon />}
                            title={"Sales"}
                            value={25}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CircleProgressWidget
                            height={204}
                            title={"Progress"}
                            value={75}
                        />
                    </Grid>
                </Grid>
            </div>
            {/* <AdminAppBar>
        <AdminToolbar title={t("dashboard.title")} />
      </AdminAppBar>
      <Grid container spacing={2}>
        {overviewItems.map((item, index) => (
          <Grid key={index} item xs={6} md={3}>
            <OverviewWidget description={t(item.unit)} title={item.value} />
          </Grid>
        ))}
        <Grid item xs={12} md={8}>
          <ActivityWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <BudgetWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesHistoryWidget value={567} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProgressWidget
            avatar={<SupervisorAccountIcon />}
            mb={2}
            title={t("dashboard.visitProgress.title")}
            value={75}
          />
          <ProgressWidget
            avatar={<ShoppingBasketIcon />}
            mb={2}
            title={t("dashboard.orderProgress.title")}
            value={50}
          />
          <ProgressWidget
            avatar={<AttachMoneyIcon />}
            title={t("dashboard.salesProgress.title")}
            value={25}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CircleProgressWidget
            height={204}
            title={t("dashboard.progress.title")}
            value={75}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <UsersWidget />
        </Grid>
        <Grid item xs={12} md={8}>
          <TeamProgressWidget />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesByCategoryWidget />
        </Grid>
        <Grid item xs={12} md={8}>
          <SalesByAgeWidget />
        </Grid>
      </Grid> */}
        </React.Fragment>
    );
};

export default Dashboard;
