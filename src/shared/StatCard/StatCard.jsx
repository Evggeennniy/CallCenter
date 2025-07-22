import { Box, Card, Typography, useTheme } from "@mui/material";

const StatCard = ({ title, value, icon, light = false }) => {
  const theme = useTheme();
  console.log("Theme background.default:", theme.palette.background.default);
  return (
    <Box
      className={light ? "" : "rmui-card"}
      sx={{
        backgroundColor: light ? theme.palette.primary.main : "",
        borderRadius: "12px",
        p: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "none",
      }}
    >
      {/* color: , */}
      <Box>
        <Typography variant={light ? "subtitle2" : "body1"} fontSize={12}>
          {title}
        </Typography>
        <Typography variant="subtitle2" fontSize={16} fontWeight={600}>
          {value}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: light ? "white" : "#15203C",
          color: light ? "#7E77FF" : "#7E77FF",
          width: 40,
          height: 40,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};

export default StatCard;
