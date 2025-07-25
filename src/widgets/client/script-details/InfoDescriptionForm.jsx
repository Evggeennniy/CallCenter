import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function InfoDescriptionForm({ onClose }) {
  const [info, setInfo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    console.log("Submitted:", { info, description });
    onClose();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Додавання інформації
      </Typography>

      <Typography sx={{ mb: 1 }}>Характиристика</Typography>
      <TextField
        placeholder="Введіть інформацію"
        fullWidth
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        sx={{ mb: 3 }}
        variant="outlined"
        size="small"
      />

      <Typography sx={{ mb: 1 }}>Опис</Typography>
      <TextField
        placeholder="Введіть oпис"
        fullWidth
        value={info}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 3 }}
        variant="outlined"
        size="small"
      />

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Зберегти
      </Button>
    </Box>
  );
}

export default InfoDescriptionForm;
