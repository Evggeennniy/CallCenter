"use client";

import React, { useState } from "react";
import { Card, Box, Typography, Link } from "@mui/material";

const notices = [
  {
    title: "Як працює блок KPI",
    description: "Дізнайся, як відстежувати свої показники: середній чек, % допродажів, час відповіді.",
    icon: "/img/analitics.svg",
    iconBg: "purple.500",
    link: "#",
  },
  {
    title: "Де знайти свій графік роботи",
    description: "Крок за кроком: як переглядати, змінювати або підтверджувати свій розклад.",
    icon: "/img/calendar.svg",
    iconBg: "orange.500",
    link: "#",
  },
  {
    title: "Як працює система балів / рейтингів",
    description: "Що впливає на твій рейтинг та як не втратити бали.",
    icon: "/img/cup.svg",
    iconBg: "purple.500",
    link: "#",
  }
];

const NoticeBoard = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          p: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: open ? "25px" : 0,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 700,
            }}
            className="text-black"
          >
           Гід по сайту
          </Typography>

          <button
            onClick={() => setOpen((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "10px",
              color: "#aaa",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
            }}
            aria-label={open ? "Свернуть" : "Развернуть"}
          >
            <span
              className={open ? "material-symbols-outlined" : "material-symbols-outlined"}
              style={{
                transition: "transform 0.2s",
                transform: open ? "rotate(0deg)" : "rotate(-90deg)",
              }}
            >
              expand_less
            </span>
          </button>
        </Box>

        {open && (
          <Box sx={{ mx: { xs: "-20px", md: "-25px" } }}>
            {notices.map((notice, index) => (
              <Box
                key={index}
                className="border-bottom lcbpm-none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "5px",
                  mb: "9px",
                  pb: "9px",
                  px: { xs: "18px", sm: "20px", lg: "25px" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      bgcolor: notice.iconBg,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <img src={notice.icon} alt={notice.title} width={20} height={20} />
                  </Box>

                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontSize: "14px", fontWeight: 500, mb: "4px" }}
                      className="text-black"
                    >
                      <Link href={notice.link} className="text-black">
                        {notice.title}
                      </Link>
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: "12px",
                        maxWidth: "166px",
                        lineHeight: "1.4",
                        mb: "4px",
                      }}
                    >
                      {notice.description}
                    </Typography>
                  </Box>
                </Box>

                <Link
                  href={notice.link}
                  sx={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    color: "grey.400",
                    textAlign: "center",
                    transition: "all 0.3s",
                    padding: "0",
                    display: "inline-block",
                    flexShrink: 0,

                    "&:hover": {
                      bgcolor: "primary.main",
                      color: "white !important",
                    },
                  }}
                  className="border"
                >
                  <i
                    className="material-symbols-outlined"
                    style={{ fontSize: "22px", lineHeight: "40px" }}
                  >
                    arrow_outward
                  </i>
                </Link>
              </Box>
            ))}
          </Box>
        )}
      </Card>
    </>
  );
};

export default NoticeBoard;