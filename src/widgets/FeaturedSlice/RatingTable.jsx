import React, { useState } from "react";
import { Card, Typography, Table, TableHead, TableRow, TableCell, TableBody, Box, Menu, MenuItem, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const data = [
  { place: 1, name: "Олена Р.", avg: 7308, upsell: "95%", leads: 55, combo: 14 },
  { place: 2, name: "Ігор М.", avg: 7108, upsell: "90%", leads: 59, combo: 14 },
  { place: 3, name: "Ви", avg: 6508, upsell: "88%", leads: 51, combo: 14 },
  { place: 4, name: "Світлана К.", avg: 6258, upsell: "85%", leads: 45, combo: 3 },
  { place: 5, name: "Андрій С.", avg: 5908, upsell: "82%", leads: 47, combo: 8 },
];

const options = ["10 днів", "5 днів", "20 днів", "30 днів"];

const RatingTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(options[0]);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (option) => {
    if (option) setSelected(option);
    setAnchorEl(null);
  };

  return (
    <Card sx={{ background: 'var(--whiteColor)', color: 'var(--blackColor)', borderRadius: 4, p: 4, mb: 3, boxShadow: 'none' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography style={{ color: 'var(--bodyColor)', fontWeight: 500, fontSize: 16, mb: 0.5 }}>
            Ваш рейтинг
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'var(--blackColor)', fontSize: 26 }}>
            3 місце
          </Typography>
        </Box>
        <Box>
          <IconButton
            onClick={handleClick}
            sx={{
              color: 'var(--blackColor)',
              borderRadius: 2,
              px: 2,
              py: 1,
              fontWeight: 500,
              fontSize: 16,
              border: '1px solid var(--borderColor)',
              minWidth: 120,
              background: 'var(--whiteColor)',
              '.dark-theme &': {
                background: 'var(--darkBorder)',
                color: 'var(--whiteColor)',
                border: '1px solid var(--darkBorder)'
              }
            }}
          >
            {selected} <KeyboardArrowDownIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={() => handleClose()} sx={{ mt: 1 }}>
            {options.map((option) => (
              <MenuItem key={option} selected={option === selected} onClick={() => handleClose(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Box sx={{ borderRadius: '10px 10px 0 0', overflow: 'hidden' }}>
      <Table style={{ borderRadius: '20px 20px 0px 0px' }}>
        <TableHead>
          <TableRow
            sx={{
              background: 'var(--borderColor)',
              '.dark-theme &': {
                background: 'var(--darkSecondaryColor)'
              }
            }}
          >
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Місце</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Ім'я</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Середній чек</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>% допродажів</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Лідів за годину</TableCell>
            <TableCell sx={{ color: 'var(--blackColor)', fontWeight: 600, fontSize: 15, border: 0, '.dark-theme &': { color: 'var(--whiteColor)' } }}>Комбо днів</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.place}
              sx={{
                background: 'var(--whiteColor)',
                borderBottom: '1px solid var(--borderColor)',
                '&:last-child': { borderBottom: 0 },
                '.dark-theme &': {
                  background: 'var(--darkCardBg)',
                  borderBottom: '1px solid var(--darkBorder)'
                }
              }}
            >
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.place}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.name}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.avg}₴</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.upsell}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.leads}</TableCell>
              <TableCell sx={{ color: 'var(--blackColor)', border: 0, fontSize:15, '.dark-theme &': { color: 'var(--whiteColor)' } }}>{row.combo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Box>
    </Card>
  );
};

export default RatingTable; 