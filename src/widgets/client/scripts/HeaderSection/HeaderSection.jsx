import {
  Box,
  Button,
  Tab,
  TableCell,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const HeaderSection = ({ tabIndex, handleTabChange }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      mb={3}
    >
      {/* Заголовок */}
      <Typography variant="h6" fontWeight={600}>
        Скрипти та характеристики
      </Typography>

      {/* Центр — табы */}
      <Box flexGrow={1} display="flex" justifyContent="center">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            minHeight: "auto",
            "& .MuiTab-root": {
              minHeight: "36px",
              minWidth: "100px",
              textTransform: "none",
              borderRadius: "8px",
              px: 2,
              py: 1,
              mx: 0.5,
              fontWeight: 500,
            },
            "& .Mui-selected": {
              backgroundColor: "primary.text", // синий фон у активной
              color: "#fff",
            },
          }}
        >
          <Tab
            className={tabIndex === 0 ? "bg-f6f7f9 tab-btn" : ""}
            label="Крос товари"
            disableRipple
          />
          <Tab
            className={tabIndex === 1 ? "bg-f6f7f9 tab-btn" : ""}
            label="Основні"
            disableRipple
          />
        </Tabs>
      </Box>

      {/* Кнопка справа */}
      <Button
        variant="text"
        sx={{
          color: "primary.main",
          fontWeight: 500,
          textTransform: "none",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        Додати крос
        <Box
          className="bg-f6f7f9"
          sx={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AddIcon fontSize="small" />
        </Box>
      </Button>
    </Box>
  );
};
export default HeaderSection;
