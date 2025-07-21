import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";

const Greeting = () => (
  <Card sx={{ background: "#6C63FF", color: "#fff", borderRadius: 3, p: 3, minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Доброго дня, <span style={{ color: '#FFD600' }}>Ольга!</span>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Ваш середній бал: <span style={{ background: '#fff', color: '#6C63FF', borderRadius: 12, padding: '2px 10px', fontWeight: 700 }}>76</span>
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', background: '#7C75FF', borderRadius: 2, p: 2 }}>
        <Box sx={{ mr: 2 }}>
          <span role="img" aria-label="call" style={{ fontSize: 24 }}>📞</span>
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ color: '#fff', fontWeight: 600 }}>
            Завдання на сьогодні
          </Typography>
          <Typography variant="caption" sx={{ color: '#fff' }}>
            Обробити 30 дзвінків за день
          </Typography>
        </Box>
      </Box>
    </Box>
  </Card>
);

export default Greeting; 