import {
  Card,
  TableContainer,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";
import React from "react";
import CreditCardIcon from "@mui/icons-material/CreditCard";
const transactionHistory = [
  { date: "05.07.2025", amount: "+2,120₴" },
  { date: "28.06.2025", amount: "+1,520₴" },
];

function TransactionHistory() {
  return (
    <Card sx={{ p: 3, borderRadius: 3 }}>
      <Typography
        variant="h6"
        textAlign="start"
        fontWeight={600}
        fontSize="18px"
        mb={2}
      >
        Історія транзакцій
      </Typography>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ background: "transparent" }}
      >
        <Table>
          <TableBody>
            {transactionHistory.map((tx, index) => (
              <TableRow
                key={tx.date}
                sx={{
                  borderRadius: 2,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  overflow: "hidden",
                  mb: 2,
                  "&:last-child td, &:last-child th": { borderBottom: 0 },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "text.secondary",
                    pb: 1,
                    px: 0,
                    border: "none",
                  }}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    {/* Circle with icon */}
                    <Box
                      className="bg-f6f7f9"
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        // bgcolor: "primary.main",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // color: "white",
                      }}
                    >
                      <CreditCardIcon
                        fontSize="medium"
                        sx={{ color: "#605DFF !important" }}
                      />
                    </Box>

                    {/* Date text */}
                    <Typography>{tx.date}</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ py: 1.5, px: 2, border: "none" }}
                >
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#25B003 !important",
                    }}
                  >
                    {tx.amount}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default TransactionHistory;
