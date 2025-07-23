import React from "react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  Card,
  TableContainer,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const recalcHeaders = [
  "Дата перерахунку",
  "Період перерахунку",
  "Оплачено",
  "Повернуто",
  "Сума факт.",
  "%забору",
  "К-ть прийнятих",
  "Сума допу",
];

const RecalcTable = () => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
        padding: { xs: "18px", sm: "20px", lg: "25px" },
      }}
      className="rmui-card"
    >
      {/* Recalculation */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: "7px",
        }}
        className="rmui-card"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Typography fontWeight={600} fontSize="16px">
            Перерахунок
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="inherit" size="small">
              <ChevronLeftIcon />
            </IconButton>
            <Typography variant="subtitle2">Червень 2025</Typography>
            <IconButton color="inherit" size="small">
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>

        <TableContainer
          component={Paper}
          className="rmui-table "
          sx={{ borderRadius: "7px" }}
        >
          <Table aria-label="Recalculation Table">
            <TableHead className="bg-f6f7f9">
              <TableRow>
                {recalcHeaders.map((h, i) => (
                  <TableCell
                    key={i}
                    className="text-black border-bottom"
                    sx={{ fontWeight: 500, fontSize: 14, padding: "12px 20px" }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell
                  className="text-black border-bottom"
                  sx={{ fontSize: 14, padding: "14px 20px" }}
                >
                  11.06.2025
                </TableCell>
                {Array.from({ length: 7 }).map((_, i) => (
                  <TableCell
                    key={i}
                    className="text-black border-bottom"
                    sx={{ fontSize: 14, padding: "14px 20px" }}
                  >
                    0
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Card>
  );
};

export default RecalcTable;
