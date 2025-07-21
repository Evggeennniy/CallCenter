import React, { useState } from "react";
import { Card, Box, Typography, Divider } from "@mui/material";
import "react-calendar/dist/Calendar.css";
import PaymentsModal from "../../../../shared/Layout/PaymentsModal";

const Payments = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date(2025, 7, 24));

  return (
    <>
      <Card
        sx={{
          background: "var(--whiteColor)",
          color: "var(--bodyColor)",
          borderRadius: 4,
          p: 4,
          minHeight: 350,
          height: 350,
          boxShadow: "none",
          cursor: "pointer",
        }}
        onClick={() => setOpen(true)}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 3, color: "var(--blackColor)" }}
        >
          Виплати
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{ color: "var(--bodyColor)", fontWeight: 400, fontSize: 20 }}
          >
            Поточний баланс:
          </Typography>
          <Typography
            style={{
              color: "var(--successColor)",
              fontWeight: 700,
              fontSize: 17,
            }}
          >
            22,520₴
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "var(--borderColor)", mb: 3 }} />
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "var(--borderColor)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 3,
              ".dark-theme &": {
                background: "var(--darkSecondaryColor)",
              },
            }}
          >
            <svg
              width="36"
              height="40"
              viewBox="0 0 25 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.212 8.66672V20.3334C22.212 20.8681 22.0216 21.3259 21.6408 21.7067C21.2601 22.0874 20.8023 22.2778 20.2676 22.2778H4.71202C4.1773 22.2778 3.71955 22.0874 3.33876 21.7067C2.95797 21.3259 2.76758 20.8681 2.76758 20.3334V8.66672C2.76758 8.132 2.95797 7.67424 3.33876 7.29346C3.71955 6.91267 4.1773 6.72228 4.71202 6.72228H20.2676C20.8023 6.72228 21.2601 6.91267 21.6408 7.29346C22.0216 7.67424 22.212 8.132 22.212 8.66672ZM4.71202 10.6112H20.2676V8.66672H4.71202V10.6112ZM4.71202 14.5001V20.3334H20.2676V14.5001H4.71202Z"
                fill="var(--primaryColor)"
              />
            </svg>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "var(--blackColor)",
                ".dark-theme &": { color: "var(--whiteColor)" },
              }}
              style={{ fontWeight: 700, fontSize: "19px" }}
            >
              Остання виплата
            </Typography>
            <Typography
              sx={{ color: "var(--bodyColor)", fontWeight: 400, fontSize: 18 }}
            >
              28 Січня 2025
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Typography
            style={{
              color: "var(--successColor)",
              fontWeight: 400,
              fontSize: 14,
            }}
          >
            +1,520₴
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "var(--borderColor)", mb: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ color: "var(--bodyColor)", fontWeight: 400, fontSize: 20 }}
          >
            Наступна виплата:
          </Typography>
          <Typography
            style={{
              color: "var(--successColor)",
              fontWeight: 700,
              fontSize: 17,
            }}
          >
            22.01.2026
          </Typography>
        </Box>
      </Card>
      <PaymentsModal
        open={open}
        onClose={() => setOpen(false)}
        date={date}
        setDate={setDate}
      />
    </>
  );
};

export default Payments;
