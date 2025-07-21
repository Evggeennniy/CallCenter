import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import ComboDaysModal from '../../shared/Layout/ComboDaysModal';

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
      <Card sx={{ color: 'var(--whiteColor)', background: 'var(--whiteColor)', borderRadius: 3, p: 3, minHeight: 80, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => setOpen(true)}>
        <Box sx={{ mr: 2 }}>
          <span role="img" aria-label="fire" style={{ fontSize: 32 }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.0939 36.6666C43.4639 31.6666 32.0573 11.6666 18.2056 3.33325C16.5756 9.16659 14.1306 10.8333 9.24227 16.6666C2.76894 24.3899 5.98394 33.3333 14.9456 36.6666C13.5873 34.9999 10.0839 31.4999 12.5006 26.6666C13.3339 24.9999 15.0006 23.3333 14.1673 19.9999C15.7973 20.8333 19.1673 21.6666 20.0006 25.8333C21.3589 24.1666 22.7673 20.6666 21.4639 16.6666C31.6673 24.1666 27.5006 31.6666 23.0939 36.6666Z" stroke="var(--successColor)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Box>
        <Box>
          <Typography style={{ color: 'var(--bodyColor)', fontWeight: 400, fontSize:'14px', lineHeight:'21px', letterSpacing:0,  }}>
            Комбо-дні
          </Typography>
          <Typography sx={{ color: 'var(--blackColor)', '.dark-theme &': { color: 'var(--whiteColor)' } }} style={{fontWeight: 700, fontSize:'20px',}}>
            4 дні поспіль
          </Typography>
        </Box>
      </Card>
      <ComboDaysModal
        open={open}
        onClose={() => setOpen(false)}
        active={active}
        setActive={setActive}
        prizes={prizes}
        currentDays={currentDays}
        getProgressWidth={getProgressWidth}
      />
    </>
  );
};

export default ComboDays; 
