import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function CorrectionForm({ onClose }) {
  const [correction, setCorrection] = useState("");
  const [block, setBlock] = useState("title");

  const handleSubmit = () => {
    console.log("Correction submitted:", { correction, block });
    onClose();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Виправлення
      </Typography>

      {/* Label над TextField */}
      <Typography sx={{ mb: 1 }}>Введіть, що потрібно змінити</Typography>
      <TextField
        placeholder="Введіть, що потрібно змінити"
        fullWidth
        value={correction}
        onChange={(e) => setCorrection(e.target.value)}
        sx={{ mb: 3 }}
        variant="outlined"
        size="small"
      />

      {/* Label над Select */}
      <Typography sx={{ mb: 1 }}>Виберіть блок</Typography>
      <FormControl fullWidth sx={{ mb: 3 }} size="small">
        <Select
          value={block}
          onChange={(e) => setBlock(e.target.value)}
          displayEmpty
        >
          <MenuItem value="title">Заголовок</MenuItem>
          <MenuItem value="description">Опис</MenuItem>
          <MenuItem value="price">Ціна</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Зберегти
      </Button>
    </Box>
  );
}

export default CorrectionForm;
