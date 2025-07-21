import React from "react";
import { Box } from "@mui/material";
import Layout from "../Layout";
import Welcome from "../../../widgets/Welcome";
import ComboDays from "../dashboard/FeaturedSlice/ComboDays";
import Earnings from "../dashboard/FeaturedSlice/Earnings";
import Payments from "../dashboard/FeaturedSlice/Payments";
import WorkChart from "../dashboard/FeaturedSlice/WorkChart";
import RatingTable from "../dashboard/FeaturedSlice/RatingTable";
import CallsTable from "../dashboard/FeaturedSlice/CallsTable";
import CrmTable from "../dashboard/FeaturedSlice/CrmTable";

const Dashboard = () => {
  return (
    <Layout>
      <Box sx={{ p: 3, width: '100%',  mx: 'auto' }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ flex: 2, minWidth: 0 }}>
            <Welcome />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <ComboDays />
            <Earnings />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Box sx={{ flex: 2, minWidth: 0 }}>
            <Payments />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <WorkChart />
          </Box>
        </Box>
        <Box sx={{ mb: 2 }}>
          <RatingTable />
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <CallsTable />
            <CrmTable />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Dashboard;