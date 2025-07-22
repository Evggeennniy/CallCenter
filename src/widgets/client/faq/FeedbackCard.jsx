import { Box, Button, Typography, Paper } from "@mui/material";

export default function FeedbackCard() {
  return (
    <Paper
      elevation={0}
      sx={{
        color: "white",
        borderRadius: "10px",
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "100%",
      }}
      className="bg-f6f7f9"
    >
      <Box>
        <Typography variant="h5" fontWeight="600" sx={{ mb: 0.5 }}>
          Зворотній зв'язок
        </Typography>
        <Typography variant="body2" sx={{ color: "#9CA3AF" }}>
          Телеграм для зв'язку
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#7E57C2",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "500",
          px: 2,
          py: 0.5,
          fontSize: "14px",
          "&:hover": {
            backgroundColor: "#6A45B6",
          },
        }}
      >
        Написати
      </Button>
    </Paper>
  );
}
