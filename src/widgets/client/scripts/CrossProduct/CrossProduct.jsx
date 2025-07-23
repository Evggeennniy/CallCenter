import { Box, Card } from "@mui/material";
import { useState } from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import TabContent from "../TabContent/TabContetn";

const CrossProductsPage = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (_, newValue) => setTabIndex(newValue);

  return (
    <Box
      elevation={3}
      sx={{
        p: { xs: 2, md: 4 },
        borderRadius: 3,
      }}
    >
      <HeaderSection tabIndex={tabIndex} handleTabChange={handleTabChange} />
      <TabContent tabIndex={tabIndex} />
    </Box>
  );
};

export default CrossProductsPage;
