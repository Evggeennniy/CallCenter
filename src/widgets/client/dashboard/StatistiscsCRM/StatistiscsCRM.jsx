import {
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
const crmStats = {
  total: 12,
  accepted: 4,
  upsellPercent: 34,
  avgCheck: 344,
};
function StatistiscsCRM() {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" gutterBottom>
          Статистика CRM
        </Typography>

        <Table>
          <TableHead sx={{ "& .MuiTableCell-root": { border: "none" } }}>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2">Зайшло</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">К-ть прийнятих</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">% допродажу</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2">Середній чек</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root": { border: "none" },
            }}
            className="bg-f6f7f9"
          >
            <TableRow>
              <TableCell sx={{ fontWeight: 600, py: 4 }}>
                <Typography variant="subtitle2">{crmStats.total}</Typography>
              </TableCell>
              <TableCell sx={{ fontWeight: 600, py: 4 }}>
                <Typography variant="subtitle2">
                  {" "}
                  {crmStats.accepted}
                </Typography>
              </TableCell>
              <TableCell sx={{ fontWeight: 600, py: 4 }}>
                <Typography variant="subtitle2">
                  {crmStats.upsellPercent}%
                </Typography>
              </TableCell>
              <TableCell sx={{ fontWeight: 600, py: 4 }}>
                <Typography variant="subtitle2">{crmStats.avgCheck}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default StatistiscsCRM;
