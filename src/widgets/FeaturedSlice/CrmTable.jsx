import React from "react";
import { Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Box } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';

const data = [
  { name: "ПУКИАКИ", avg: 7308, upsell: "47%" },
  { name: "КИСИМИСИ", avg: 7308, upsell: "47%" },
  { name: "БЛАБЛАБЛА", avg: 7308, upsell: "47%" },
];

const CrmTable = () => (
  <Card sx={{ background: 'var(--whiteColor)', color: 'var(--blackColor)', borderRadius: 3, p: 3, mb: 3, boxShadow: 'none' }}>
    <Typography sx={{ color: 'var(--blackColor)', fontWeight: 700, fontSize: 22, mb: 3, '.dark-theme &': { color: 'var(--whiteColor)' } }}>
      Доступні CRM
    </Typography>
    <Box sx={{ borderRadius: '10px 10px 0 0', overflow: 'hidden', marginTop:'10px' }}>
      <Table>
        <TableHead>
          <TableRow sx={{ background: 'var(--borderColor)', '.dark-theme &': { background: 'var(--darkSecondaryColor)' } }}>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 16, border: 0, py: 2, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Назва</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 16, border: 0, py: 2, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Середній чек</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 16, border: 0, py: 2, '.dark-theme &': { color: 'var(--whiteColor)' } }}>% допродажу</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 16, border: 0, py: 2, '.dark-theme &': { color: 'var(--whiteColor)' } }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow key={idx} sx={{ background: 'var(--whiteColor)', borderBottom: '1px solid var(--borderColor)', '.dark-theme &': { background: 'var(--darkCardBg)', borderBottom: '1px solid var(--darkBorder)' } }}>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, py: 2, fontSize: 15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.name}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, py: 2, fontSize: 15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.avg}₴</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, py: 2, fontSize: 15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.upsell}</TableCell>
              <TableCell sx={{ border: 0, p: 0 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', mr: 2 }}>
                  <IconButton
                    size="small"
                    style={{
                      color: '#6366F1',
                      fontWeight: 600,
                      fontSize: 15,
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 1,
                      py: 0.5,
                      background: 'transparent',
                      '.dark-theme &': {
                        background: 'var(--darkBorder)',
                        color: 'var(--whiteColor)',
                        fontWeight: 600,
                        fontSize: 15,
                        borderRadius: 2,
                        minWidth: 'auto',
                        px: 1,
                        py: 0.5
                      }
                    }}
                  >
                    <VisibilityIcon fontSize="small" sx={{ mr: 0.6, '.dark-theme &': { color: 'var(--whiteColor)' } }} style={{ color: '#605DFF'}} />
                    Див
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Card>
);

export default CrmTable; 