import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function AttributeForm({ onClose }) {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    // TODO: dispatch or API call
    console.log("Submit attribute:", { name, value });
    onClose();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Додати атрибут
      </Typography>
      <TextField
        placeholder="Назва атрибута"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        placeholder="Значення"
        fullWidth
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
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

export default AttributeForm;
