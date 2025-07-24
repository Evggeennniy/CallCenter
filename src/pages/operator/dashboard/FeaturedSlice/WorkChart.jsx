import React from "react";
import { Card, Box, Typography } from "@mui/material";

const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "НД"];
const hours = [4, 2, 6, 7, 5, 0, 0];
const colors = [
  'var(--successColor)', 
  'var(--dangerColor)', 
  'var(--infoColor)',   
  'var(--primaryColor)',
  'var(--successColor)',
  'var(--darkCardBg)',  
  'var(--darkCardBg)'   
];

const WorkChart = () => (
  <Card sx={{ background: 'var(--whiteColor)', color: 'var(--whiteColor)', borderRadius: 4, p: 4, minHeight: 350, height: 350, boxShadow: 'none' }}>
    <Typography variant="h5" sx={{ mb:2, color: 'var(--blackColor)', '.dark-theme &': { color: 'var(--whiteColor)' } }} style={{fontWeight: 700, fontSize:'20px',}}>
      Графік роботи
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ width: 43, height: 43, borderRadius: '10%', background: 'var(--borderColor)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2, '.dark-theme &': { background: 'var(--darkSecondaryColor)' } }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="10" stroke="var(--primaryColor)" strokeWidth="2" fill="none"/>
          <path d="M11 6V11L14 13" stroke="var(--primaryColor)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Box>
      <Box>
        <Typography sx={{ color: 'var(--bodyColor)', fontWeight: 400, fontSize: 16, mb: 0.5 }}>
          Недопрацьовані години
        </Typography>
        <Typography sx={{  '.dark-theme &': { color: 'var(--whiteColor)' } }} style={{fontWeight: 700, fontSize:'22px',}}>
          6 год 45 хв
        </Typography>
      </Box>
    </Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: 160, mt: 2, mb: 1 }}>
      {days.map((d, i) => (
        <Box key={d} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 36 }}>
          <Box sx={{
            width: 28,
            height: hours[i] * 16,
            background: colors[i],
            borderRadius: 0,
            mb: 1,
            transition: 'background 0.2s'
          }} />
          <Typography sx={{
            color:
              i === 1 ? 'var(--dangerColor)' :
              i === 4 || i === 0 ? 'var(--successColor)' :
              'var(--bodyColor)',
            fontWeight: i === 4 ? 700 : 400,
            fontSize: 15,
            textAlign: 'center',
            letterSpacing: 0
          }}>
            {d}
          </Typography>
        </Box>
      ))}
    </Box>
  </Card>
);

export default WorkChart; 