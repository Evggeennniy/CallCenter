import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Select,
  MenuItem,
} from "@mui/material";
import useFilteredOperators from "../../../../features/operatorData/useFilteredOperators"; // путь подкорректируй под себя

const operatorHeaders = [
  "Оператор",
  "Середній чек",
  "К-ть прийнятих",
  "% допродажу",
];

const operatorData = [
  {
    name: "Emily Johnson",
    avg: "730₴",
    accepted: 55,
    upsell: "47%",
    period: "10",
  },
  {
    name: "Sarah Miller",
    avg: "690₴",
    accepted: 62,
    upsell: "42%",
    period: "30",
  },
  {
    name: "Daniel Smith",
    avg: "800₴",
    accepted: 48,
    upsell: "50%",
    period: "10",
  },
];

function OperatorList() {
  const [period, setPeriod] = useState("10 днів");
  const filteredData = useFilteredOperators(operatorData, period);

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
      <Paper
        elevation={0}
        sx={{
          borderRadius: "7px",
          color: "white",
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
          <Typography fontWeight={600} variant="h3" fontSize="16px">
            Список операторів
          </Typography>
          <Select
            size="small"
            variant="outlined"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            sx={{
              color: "white",
              fontSize: "14px",
            }}
          >
            <MenuItem value="10 днів">10 днів</MenuItem>
            <MenuItem value="30 днів">30 днів</MenuItem>
          </Select>
        </Box>

        <TableContainer
          component={Paper}
          className="rmui-table"
          sx={{ borderRadius: "7px" }}
        >
          <Table size="small" aria-label="Operator List Table">
            <TableHead className="bg-f6f7f9">
              <TableRow>
                {operatorHeaders.map((h, i) => (
                  <TableCell
                    key={i}
                    className="text-black border-bottom"
                    sx={{ fontWeight: 500, padding: "12px 20px", fontSize: 14 }}
                  >
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData.map((row, i) => (
                <TableRow key={i}>
                  <TableCell
                    className="text-black border-bottom"
                    sx={{ padding: "14px 20px", fontSize: 14 }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    className="text-black border-bottom"
                    sx={{ padding: "14px 20px", fontSize: 14 }}
                  >
                    {row.avg}
                  </TableCell>
                  <TableCell
                    className="text-black border-bottom"
                    sx={{ padding: "14px 20px", fontSize: 14 }}
                  >
                    {row.accepted}
                  </TableCell>
                  <TableCell
                    className="text-black border-bottom"
                    sx={{ padding: "14px 20px", fontSize: 14 }}
                  >
                    {row.upsell}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box mt={2}>
          <Typography
            variant="body2"
            sx={{ color: "#9CA3AF", cursor: "pointer" }}
          >
            Показати всіх
          </Typography>
        </Box>
      </Paper>
    </Card>
  );
}

export default OperatorList;
