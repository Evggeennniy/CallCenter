import React from "react";
import { Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, Box, Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const data = [
  { date: "24.05.25", score: 96, id: 345324, crm: "ФОНД" },
  { date: "23.05.25", score: 79.6, id: 688654, crm: "ФОНД" },
];

const CallsTable = () => {
  return (
    <Card sx={{ background: 'var(--whiteColor)', color: 'var(--blackColor)', borderRadius: 4, p: 4, mb: 3, boxShadow: 'none' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography sx={{ color: 'var(--bodyColor)', fontWeight: 500, fontSize: 16, mb: 0.5 }}>
            Оцінка дзвінків
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--blackColor)', fontSize: 26 }}>
            Загальний бал: <span style={{ color: 'var(--successColor)' }}>91</span>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography style={{ color: 'var(--bodyColor)', fontWeight: 500, fontSize: 16 }}>
            3 дзвінка
          </Typography>
          <Typography style={{ color: 'var(--successColor)', fontWeight: 400, fontSize: 13, ml: 1 }}>+7.6%</Typography>
        </Box>
      </Box>
      <Box sx={{ borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: 'var(--borderColor)', '.dark-theme &': { background: 'var(--darkSecondaryColor)' } }}>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 500, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Дата</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 500, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Оцінка</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 500, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>id</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 500, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>CRM</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 500, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx} sx={{ background: 'var(--whiteColor)', borderBottom: '1px solid var(--borderColor)', '.dark-theme &': { background: 'var(--darkCardBg)', borderBottom: '1px solid var(--darkBorder)' } }}>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.date}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.score}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' }}}>{row.id}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0 , fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' }}}>{row.crm}</TableCell>
              <TableCell sx={{ border: 0, p: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', mr: 2 }}>
                  <Button
                    variant="contained"
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{
                      color: 'var(--blackColor)',
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 500,
                      fontSize: 15,
                      boxShadow: 'none',
                      background: 'var(--whiteColor)',
                      px: 2,
                      py: 1,
                      '.dark-theme &': {
                        background: 'var(--darkBorder)',
                        color: 'var(--whiteColor)',
                        borderRadius: 2,
                        fontSize: 15,
                        fontWeight: 500,
                        minWidth: 'auto',
                        px: 2,
                        py: 1
                      }
                    }}
                  >
                    Переглянути
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </Card>
  );
};

export default CallsTable; 