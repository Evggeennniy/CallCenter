import React from "react";
import { Box, Typography, IconButton, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const EarningsModal = ({ open, onClose, paymentsData }) => {
  if (!open) return null;
  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 2000, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, background: 'rgba(0,0,0,0.4)' }}>
      <Box sx={{
        background: 'var(--whiteColor)',
        color: 'var(--blackColor)',
        '.dark-theme &': {
          background: '#101522',
          color: 'var(--whiteColor)',
        },
        borderRadius: '20px',
        p: 4,
        minWidth: 927,
        width: 827,
        mb: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
          <Typography sx={{ fontWeight: 700, fontSize: 32, color: 'var(--blackColor)', mb: 2, '.dark-theme &': { color: 'var(--whiteColor)' } }}>
            Виплати за місяць
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'var(--blackColor)', position: 'absolute', top: 24, right: 24, '.dark-theme &': { color: 'var(--whiteColor)' } }}>
            <span style={{ fontSize: 28, fontWeight: 300 }}>&times;</span>
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--modalIconBg, #F3F4F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2, '.dark-theme &': { background: '#19233A' } }}>
              <svg width="32" height="32" viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.212 8.66672V20.3334C22.212 20.8681 22.0216 21.3259 21.6408 21.7067C21.2601 22.0874 20.8023 22.2778 20.2676 22.2778H4.71202C4.1773 22.2778 3.71955 22.0874 3.33876 21.7067C2.95797 21.3259 2.76758 20.8681 2.76758 20.3334V8.66672C2.76758 8.132 2.95797 7.67424 3.33876 7.29346C3.71955 6.91267 4.1773 6.72228 4.71202 6.72228H20.2676C20.8023 6.72228 21.2601 6.91267 21.6408 7.29346C22.0216 7.67424 22.212 8.132 22.212 8.66672ZM4.71202 10.6112H20.2676V8.66672H4.71202V10.6112ZM4.71202 14.5001V20.3334H20.2676V14.5001H4.71202Z" fill="#605DFF"/>
              </svg>
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: 22, color: 'var(--blackColor)', ml: 1, '.dark-theme &': { color: 'var(--whiteColor)' } }}>
              Загально: <span style={{ color: '#22C55E', fontWeight: 700, fontSize: 22, marginLeft: 8 }}>+18 200₴</span>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--modalIconBg, #F3F4F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', '.dark-theme &': { background: '#19233A' } }}>
              <ArrowBackIosNewIcon sx={{ color: 'var(--blackColor)', '.dark-theme &': { color: 'var(--whiteColor)' } }} />
            </Box>
            <Typography sx={{ fontWeight: 500, fontSize: 24, color: 'var(--blackColor)', mx: 2, '.dark-theme &': { color: 'var(--whiteColor)' } }}>
              Червень 2025
            </Typography>
            <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--modalIconBg, #F3F4F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', '.dark-theme &': { background: '#19233A' } }}>
              <ArrowForwardIosIcon sx={{ color: 'var(--blackColor)', '.dark-theme &': { color: 'var(--whiteColor)' } }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{
        background: 'var(--whiteColor)',
        color: 'var(--blackColor)',
        borderRadius: '20px',
        p: '20px',
        minWidth: 927,
        width: 827,
        overflow: 'hidden',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
        border: '1px solid var(--borderColor, #E5E7EB)',
        '.dark-theme &': {
          background: '#101522',
          color: 'var(--whiteColor)',
          border: '1px solid #232B3E',
        },
      }}>
        <Table sx={{ minWidth: 787, borderCollapse: 'separate', borderSpacing: 0 }}>
          <TableHead>
            <TableRow sx={{ background: 'var(--tableHeadBg,rgb(255, 255, 255))', borderRadius: '5px 5px 0 0', '.dark-theme &': { background: '#19233A' } }}>
              <TableCell style={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 20, border: 0, py: 2, pl: 4, borderTopLeftRadius: 12, '.dark-theme &': { color: '#fff' } }}>Період</TableCell>
              <TableCell style={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 20, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>Години</TableCell>
              <TableCell style={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 20, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>Сума допу</TableCell>
              <TableCell style={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 20, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>% від допу</TableCell>
              <TableCell style={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 20, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>Сума ЗП</TableCell>
              <TableCell style={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 20, border: 0, py: 2, borderTopRightRadius: 12, '.dark-theme &': { color: '#fff' } }}>Оцінка</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentsData.map((row, idx) => (
              <TableRow key={idx} sx={{ background: 'var(--whiteColor)', borderBottom: idx === paymentsData.length - 1 ? 'none' : '1px solid var(--borderColor, #E5E7EB)', '.dark-theme &': { background: '#101522', borderBottom: idx === paymentsData.length - 1 ? 'none' : '1px solid #232B3E' } }}>
                <TableCell style={{ color: 'var(--blackColor)', fontSize: 19, border: 0, py: 2, pl: 4, '.dark-theme &': { color: '#fff' } }}>{row.date}</TableCell>
                <TableCell style={{ color: 'var(--blackColor)', fontSize: 19, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>{row.hours}</TableCell>
                <TableCell style={{ color: 'var(--blackColor)', fontSize: 19, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>{row.debt}</TableCell>
                <TableCell style={{ color: 'var(--blackColor)', fontSize: 19, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>{row.percent}</TableCell>
                <TableCell style={{ color: 'var(--blackColor)', fontSize: 19, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>{row.salary}</TableCell>
                <TableCell style={{ color: 'var(--blackColor)', fontSize: 19, border: 0, py: 2, '.dark-theme &': { color: '#fff' } }}>{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default EarningsModal; 