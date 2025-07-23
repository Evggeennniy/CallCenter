import { Box, Grid } from "@mui/material";
import React from "react";
// import TopSellingProducts from "../../../widgets/client/dashboard/TopSellingProducts";
import Layout from "../Layout";
import OperatorList from "../../../widgets/client/dashboard/OperatorList/OperatorList";
import RecalcTable from "../../../widgets/client/dashboard/Recalc/RecalcTable";
import ProductStatistics from "../../../widgets/client/dashboard/ProductStatistics/ProductStatistics";
import StatistiscsCRM from "../../../widgets/client/dashboard/StatistiscsCRM/StatistiscsCRM";
import TransactionHistory from "../../../widgets/client/dashboard/TransactionHistory/TransactionHistory";
// import WriteOff from "../../../widgets/client/dashboard/WriteOff/WriteOff";
// import Replenishment from "../../../widgets/client/dashboard/Replenishment/Replenishment";
// import Bonus from "../../../widgets/client/dashboard/Bonus/Bonus";
import SalaryStatistiscs from "../../../widgets/client/dashboard/SalaryStatistiscs/SalaryStatistiscs";
import DashboardCards from "../../../widgets/client/dashboard/DashboardCards/DashboardCards";

function Dashboard() {
  return (
    <Layout>
      <Grid sx={{ mb: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
        <DashboardCards />
      </Grid>
      <Grid sx={{ mb: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
        {/* <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <WriteOff />
          <Replenishment />
          <Bonus />
        </Box> */}
        <SalaryStatistiscs />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
        <RecalcTable />
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
        <OperatorList />
      </Grid>

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            xl: "row",
          },
          gap: 2,
          alignItems: "stretch",
          mb: 2,
        }}
      >
        <Box
          sx={{
            flex: { xl: "0 0 70%", xs: "1 1 100%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StatistiscsCRM />
        </Box>

        <Box
          sx={{
            flex: { xl: "0 0 29%", xs: "1 1 100%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TransactionHistory />
        </Box>
      </Box>
      <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 7 }}>
        <ProductStatistics />
      </Grid>
    </Layout>
  );
}

export default Dashboard;
