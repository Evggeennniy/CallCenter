import {
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

function QuantityForm({ onClose }) {
  const [mode, setMode] = useState("amount"); // "amount" or "unlimited"
  const [quantity, setQuantity] = useState("");

  const handleSubmit = () => {
    const finalQuantity = mode === "unlimited" ? "unlimited" : quantity;
    console.log("Submit quantity:", finalQuantity);
    // TODO: dispatch Redux or send API call
    onClose();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Виберіть тип кількості
      </Typography>

      {mode === "amount" && (
        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography sx={{ mb: 1 }}>К-ть товару</Typography>
          <TextField
            type="number"
            fullWidth
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Введіть кількість"
          />
        </Box>
      )}
      <RadioGroup
        row
        value={mode}
        onChange={(e) => setMode(e.target.value)}
        sx={{ gap: 2 }}
      >
        <FormControlLabel
          value="amount"
          control={<Radio />}
          label="Вказати кількість"
        />
        <FormControlLabel
          value="unlimited"
          control={<Radio />}
          label="Без кількості (Обмеженно)"
        />
      </RadioGroup>
      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        Зберегти
      </Button>
    </Box>
  );
}

export default QuantityForm;
