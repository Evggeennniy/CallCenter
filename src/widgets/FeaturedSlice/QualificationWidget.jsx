import React, { useState } from "react";
import { Card, Box, Typography, Button, IconButton } from "@mui/material";

const lessons = [
  {
    title: "Урок 1",
    description: "5 принципів ввічливого діалогу",
    icon: "/img/video-chat.svg",
    iconBg: "linear-gradient(135deg, #A259FF 0%, #6A4FFF 100%)",
    completed: true,
  },
  {
    title: "Урок 2",
    description: "Пройдіть тест",
    icon: "/img/note.svg",
    iconBg: "linear-gradient(135deg, #A259FF 0%, #6A4FFF 100%)",
    completed: false,
  },
];

const QualificationWidget = () => {
  const [open, setOpen] = useState(true);
  return (
    <Card
      sx={{
        background: "var(--darkCardBg)",
        borderRadius: "12px",
        boxShadow: "none",
        border: "none",
        p: { xs: "18px", sm: "24px", lg: "32px" },
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 1 }}>
        <Typography
          variant="h5"
          sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: "18px", md: "20px" } }}
        >
          Підвищення кваліфікації
        </Typography>
        <IconButton onClick={() => setOpen((v) => !v)} sx={{ color: "#8695AA" }}>
          <span className="material-symbols-outlined" style={{ transform: open ? "rotate(180deg)" : "none", transition: "0.2s" }}>expand_more</span>
        </IconButton>
      </Box>
      {open && (
        <Box>
          {lessons.map((lesson, idx) => (
            <Box
              key={idx}
              sx={{
                display: "flex",
                alignItems: "center",
                py: "18px",
                borderBottom: idx !== lessons.length - 1 ? "1px solid var(--darkBorder)" : "none",
                gap: "18px",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: lesson.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <img src={lesson.icon} alt="icon" width={24} height={24} />
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff", fontWeight: 600, fontSize: "16px", mb: "4px" }}>{lesson.title}</Typography>
                  <Typography sx={{ color: "#8695AA", fontSize: "14px", fontWeight: 400, lineHeight: 1.4 }}>{lesson.description}</Typography>
                </Box>
              </Box>
              {lesson.completed ? (
                <span className="material-symbols-outlined" style={{ color: "#8695AA", fontSize: 28 }}>check_circle</span>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #6A4FFF 0%, #605DFF 100%)",
                    borderRadius: "20px",
                    fontWeight: 600,
                    fontSize: "14px",
                    px: 3,
                    textTransform: "none",
                    boxShadow: "none",
                  }}
                >
                  Я пройшов(ла)
                  <span className="material-symbols-outlined" style={{ fontSize: 18, marginLeft: 6 }}>arrow_outward</span>
                </Button>
              )}
            </Box>
          ))}
        </Box>
      )}
    </Card>
  );
};

export default QualificationWidget; 