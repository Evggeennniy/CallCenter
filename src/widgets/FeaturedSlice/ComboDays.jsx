import React, { useState } from "react";
import { Card, Box, Typography, Dialog, DialogContent } from "@mui/material";

const prizes = [
  {
    days: 24,
    label: "Ящик напою",
    value: "500₴",
    icon:  "/img/combo-fire.svg",
  },
  {
    days: 42,
    label: "Навушники",
    value: "1100₴",
    icon:  "/img/win-combo.svg",
  },
  {
    days: 65,
    label: "2 дні відпустки",
    value: "2200₴",
    icon:  "/img/medal-combo.svg",
  }
];

const currentDays = 38;

function getProgressWidth() {
  if (currentDays <= prizes[0].days) return `${(currentDays / prizes[2].days) * 100}%`;
  if (currentDays <= prizes[1].days) return `${(currentDays / prizes[2].days) * 100}%`;
  if (currentDays <= prizes[2].days) return `${(currentDays / prizes[2].days) * 100}%`;
  return '100%';
}

const ComboDays = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(2);

  return (
    <>
      <Card sx={{ color: "#fff", borderRadius: 3, p: 3, minHeight: 80, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpen(true)}>
        <Box sx={{ mr: 2 }}>
          <span role="img" aria-label="fire" style={{ fontSize: 32 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.0939 36.6666C43.4639 31.6666 32.0573 11.6666 18.2056 3.33325C16.5756 9.16659 14.1306 10.8333 9.24227 16.6666C2.76894 24.3899 5.98394 33.3333 14.9456 36.6666C13.5873 34.9999 10.0839 31.4999 12.5006 26.6666C13.3339 24.9999 15.0006 23.3333 14.1673 19.9999C15.7973 20.8333 19.1673 21.6666 20.0006 25.8333C21.3589 24.1666 22.7673 20.6666 21.4639 16.6666C31.6673 24.1666 27.5006 31.6666 23.0939 36.6666Z" stroke="#4CAF50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Box>
        <Box>
          <Typography style={{ color: '#8695AA', fontWeight: 400, fontSize:'14px', lineHeight:'21px', letterSpacing:0,  }}>
            Комбо-дні
          </Typography>
          <Typography style={{ color: '#FFFFFF', fontWeight: 700, fontSize:'20px' }}>
            4 дні поспіль
          </Typography>
        </Box>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="lg" fullWidth
        PaperProps={{
          sx: {
            background: 'none',
            boxShadow: 'none',
            backdropFilter: 'none',
            borderRadius: 0,
            p: 0,
          }
        }}
      >
        <DialogContent sx={{ background: 'none', color: "#fff", borderRadius: 0, p: 0, minWidth: 700, boxShadow: 'none', overflow: 'visible', position: 'relative' }}>
          <Box sx={{ position: 'absolute', top: 12, right: 20, zIndex: 10 }}>
            <span
              style={{ cursor: 'pointer', fontSize: 32, color: '#fff', fontWeight: 300 }}
              onClick={() => setOpen(false)}
            >
              &times;
            </span>
          </Box>
          <Box sx={{ p: 2, width: '100%' }}>
            <Typography sx={{ fontWeight: 500, mb: 3, fontSize: 18, display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: 22, color: "#fff", marginRight: 10 }}>ⓘ</span> В кінці місяця виберіть приз
            </Typography>
            <Box sx={{ display: "flex", flexDirection: 'row', gap: 3, mb: 3 }}>
              {prizes.map((prize, i) => (
                <Box
                  key={i}
                  onClick={() => setActive(i)}
                  sx={{
                    flex: 1,
                    background: active === i ? 'transparent' : '#6C63FF',
                    border: active === i ? '2px solid #22FF8A' : 'none',
                    borderRadius: 4,
                    p: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    minWidth: 0,
                    minHeight: 110,
                    transition: "all 0.2s",
                    boxShadow: 'none',
                    position: 'relative',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                   <img src={prize.icon} alt="" /> 
                    <Box sx={{ ml: 1 }}>
                      <Typography style={{ fontWeight: 700, fontSize: 18, color: '#fff', mb: 0.2 }}>
                        {prize.days} комбо днів
                      </Typography>
                      <Typography style={{ color: '#fff', fontSize: 14 }}>{prize.label}</Typography>
                    </Box>
                  </Box>
                  <Typography style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>{prize.value}</Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ background: "#232B3E", borderRadius: 2, height: 28, mb: 1, width: "100%", position: "relative" }}>
              <Box sx={{
                background: "#6C63FF",
                borderRadius: 2,
                height: "100%",
                width: getProgressWidth(),
                transition: "width 0.3s"
              }} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: 'center', color: '#fff', fontWeight: 500, fontSize: 16, mt: 0.5 }}>
              <Typography sx={{ color: '#fff', fontWeight: 400 }}>0 днів</Typography>
              <Typography sx={{ color: '#fff', fontWeight: 400 }}>{prizes[1].days} днів</Typography>
              <Typography sx={{ color: '#22FF8A', fontWeight: 700 }}>{prizes[2].days} днів</Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ComboDays; 
