import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import StyledTable from "../../../../shared/StyledTable/StyledTable";
const firstTableData = [
  {
    name: "Товар A",
    avgUpsell: "$10",
    sold: 5,
    upsellPercent: 30,
    totalSum: "$200",
    profit: "$50",
  },
  {
    name: "Товар A",
    avgUpsell: "$10",
    sold: 5,
    upsellPercent: 30,
    totalSum: "$200",
    profit: "$50",
  },
];

const secondTableData = [
  { name: "Опція 1", value: "Значення 1" },
  { name: "Опція 2", value: "Значення 2" },
];
const thirdTableData = [
  { name: "Категорія", value: "Статус" },
  { name: "Тип", value: "Активний" },
];
export default function SalaryStatistiscs() {
  return (
    <Card
      className="rmui-table"
      sx={{ padding: { xs: "18px", sm: "20px", lg: "25px" } }}
    >
      <Box
        display="flex"
        gap={2}
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        {/* Первая таблица — 5+ столбцов */}
        <Box flex={3} minWidth={300}>
          <StyledTable
            title="Статистика товарів"
            subtitle={null}
            headers={[
              "Назва товару",
              "Сер. сума допродажі",
              "Продано",
              "% допродажі",
              "Загальна сума",
              "Загальна маржа",
            ]}
            rows={firstTableData}
            renderRow={(row, index) => (
              <TableRow key={index}>
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
                  {row.avgUpsell}
                </TableCell>
                <TableCell
                  className="text-black border-bottom"
                  sx={{ padding: "14px 20px", fontSize: 14 }}
                >
                  {row.sold}
                </TableCell>
                <TableCell
                  className="text-black border-bottom"
                  sx={{ padding: "14px 20px", fontSize: 14 }}
                >
                  {row.upsellPercent}%
                </TableCell>
                <TableCell
                  className="text-black border-bottom"
                  sx={{ padding: "14px 20px", fontSize: 14 }}
                >
                  {row.totalSum}
                </TableCell>
                <TableCell
                  className="text-black border-bottom"
                  sx={{ padding: "14px 20px", fontSize: 14 }}
                >
                  {row.profit}
                </TableCell>
              </TableRow>
            )}
          />
        </Box>

        {/* Вторая таблица — 2 столбца */}
        <Box flex={1} minWidth={250}>
          <StyledTable
            title="Параметри"
            headers={["Назва", "Значення"]}
            rows={secondTableData}
            renderRow={(row, index) => (
              <TableRow key={index}>
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
                  {row.value}
                </TableCell>
              </TableRow>
            )}
          />
        </Box>

        {/* Третья таблица — 2 столбца */}
        <Box flex={1} minWidth={250}>
          <StyledTable
            title="Категорії"
            headers={["Назва", "Статус"]}
            rows={thirdTableData}
            renderRow={(row, index) => (
              <TableRow key={index}>
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
                  {row.value}
                </TableCell>
              </TableRow>
            )}
          />
        </Box>
      </Box>
      <Box mt={2}>
        <Typography
          variant="body2"
          sx={{ color: "#9CA3AF", cursor: "pointer" }}
        >
          Показати всіх
        </Typography>
      </Box>
    </Card>
  );
}
