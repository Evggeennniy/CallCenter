import React, { useState } from "react";
import { Card, Box, Typography, IconButton, Collapse } from "@mui/material";

const notices = [
  {
    title: "Як працює блок KPI",
    description: "Дізнайся, як відстежувати свої показники: середній чек, % допродажів, час відповіді.",
    icon: "/img/note.svg",
    iconBg: "linear-gradient(135deg, #A259FF 0%, #6A4FFF 100%)",
    link: "#",
  },
  {
    title: "Де знайти свій графік роботи",
    description: "Крок за кроком: як переглядати, змінювати або підтверджувати свій розклад.",
    icon: "/img/calendar.svg",
    iconBg: "linear-gradient(135deg, #FF9800 0%, #FE7A36 100%)",
    link: "#",
  },
  {
    title: "Як працює система балів / рейтингів",
    description: "Що впливає на твій рейтинг та як не втратити бали.",
    icon: "/img/trophy.svg",
    iconBg: "linear-gradient(135deg, #A259FF 0%, #6A4FFF 100%)",
    link: "#",
  },
];

const NoticeBoard = () => {
  const [open, setOpen] = useState(true);
  return (
    <Card
      sx={{
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'var(--darkCardBg)'
            : '#fff',
        borderRadius: '7px',
        boxShadow: 'none',
        border: 'none',
        p: { xs: '18px', sm: '20px', lg: '25px' },
        mb: 3,
      }}
      className="rmui-card"
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: '10px' }}>
        <Typography
          variant="h5"
          sx={{
            color: (theme) =>
              theme.palette.mode === 'dark' ? '#fff' : '#3A4252',
            fontWeight: 700,
            fontSize: { xs: '18px', md: '20px' },
          }}
        >
          Гід по сайту
        </Typography>
        <IconButton onClick={() => setOpen((v) => !v)} sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#8695AA' : '#b1bbc8', transition: '0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>
          <span className="material-symbols-outlined">expand_more</span>
        </IconButton>
      </Box>
      <Collapse in={open} timeout={300}>
        <Box>
          {notices.map((notice, idx) => (
            <Box
              key={idx}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '18px',
                mb: idx !== notices.length - 1 ? '9px' : 0,
                pb: idx !== notices.length - 1 ? '9px' : 0,
                borderBottom: idx !== notices.length - 1
                  ? (theme) => '1px solid ' + (theme.palette.mode === 'dark' ? 'var(--darkBorder)' : '#ECEEF2')
                  : 'none',
                px: { xs: '0', sm: '0', lg: '0' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: notice.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <img src={notice.icon} alt="icon" width={20} height={20} />
                </Box>
                <Box>
                  <Typography sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#fff' : '#3A4252', fontWeight: 600, fontSize: '14px', mb: '4px' }}>{notice.title}</Typography>
                  <Typography sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#8695AA' : '#64748B', fontSize: '12px', fontWeight: 400, lineHeight: 1.4 }}>{notice.description}</Typography>
                </Box>
              </Box>
              <IconButton href={notice.link} sx={{ color: (theme) => theme.palette.mode === 'dark' ? '#8695AA' : '#b1bbc8', border: '1px solid', borderColor: (theme) => theme.palette.mode === 'dark' ? 'var(--darkBorder)' : '#ECEEF2', width: 40, height: 40, borderRadius: '50%', transition: 'all 0.3s', ml: 1 }}>
                <span className="material-symbols-outlined" style={{ fontSize: 22, lineHeight: '40px' }}>arrow_outward</span>
              </IconButton>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Card>
  );
};

export default NoticeBoard; 