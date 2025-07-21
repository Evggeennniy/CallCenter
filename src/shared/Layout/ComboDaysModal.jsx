import React from "react";
import { Dialog, DialogContent, Box, Typography } from "@mui/material";

const ComboDaysModal = ({ open, onClose, active, setActive, prizes, currentDays, getProgressWidth }) => (
  <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth
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
          onClick={onClose}
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
);

export default ComboDaysModal; 