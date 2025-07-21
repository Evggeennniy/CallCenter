import React from "react";
import { Dialog, DialogContent, Typography, TextField, Box, Button } from "@mui/material";

const CardModal = ({ open, onClose, cardValue, setCardValue, onSave }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogContent
      sx={{
        background: '#fff',
        color: '#232B3E',
        borderRadius: 3,
        p: 4,
        minWidth: 530,
        width: 530,
        maxWidth: 530,
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.08)',
        '.dark-theme &': {
          background: '#0C1427',
          color: '#fff',
        },
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Банківські реквізити
      </Typography>
      <Typography sx={{ mb: 2 }}>Ваша картка:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Введіть номер картки"
        value={cardValue}
        onChange={e => setCardValue(e.target.value)}
        sx={{
          mb: 3,
          input: { color: "#fff" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#232B3E" },
            "&:hover fieldset": { borderColor: "#6366F1" }
          }
        }}
        InputProps={{
          style: { background: "#10182B", borderRadius: 8 }
        }}
      />
      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            background: "#6366F1",
            color: "#fff",
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 500
          }}
          onClick={onSave}
        >
          Зберігти
        </Button>
        <Button
          variant="text"
          sx={{
            color: "#fff",
            textTransform: "none",
            fontWeight: 500
          }}
          onClick={onClose}
        >
          Закрити
        </Button>
      </Box>
    </DialogContent>
  </Dialog>
);

export default CardModal; 