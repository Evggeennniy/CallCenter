import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
const productStats = [
  {
    icon: "📱",
    name: "Smart Band",
    avgUpsell: "130₴",
    sold: 5,
    upsellPercent: 75,
    totalSum: "890₴",
    profit: 567,
  },
  {
    icon: "🎧",
    name: "Headphone",
    avgUpsell: "977₴",
    sold: 7,
    upsellPercent: 98,
    totalSum: "1111₴",
    profit: 888,
  },
  {
    icon: "🔊",
    name: "Bluetooth Speaker",
    avgUpsell: "435₴",
    sold: 34,
    upsellPercent: 55,
    totalSum: "1240₴",
    profit: 190,
  },
  {
    icon: "🎶",
    name: "Airbuds 2nd Gen",
    avgUpsell: "577₴",
    sold: 1,
    upsellPercent: 29,
    totalSum: "910₴",
    profit: 332,
  },
];

function ProductStatistics() {
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
        <CardContent sx={{ px: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h3" fontWeight={600} fontSize="16px">
              Статистика товарів
            </Typography>
            <Typography
              component="span"
              fontWeight={400}
              fontSize="14px"
              sx={{ color: "#9CA3AF" }}
            >
              (За сьогодні)
            </Typography>
          </Box>
          <TableContainer
            component={Paper}
            className="rmui-table"
            sx={{ borderRadius: "7px" }}
          >
            <Table size="small" aria-label="Product Statistics Table">
              <TableHead className="bg-f6f7f9">
                <TableRow>
                  {[
                    "Назва товару",
                    "Сер. сума допродажі",
                    "Продано",
                    "% допродажі",
                    "Загальна сума",
                    "Загальна маржа",
                  ].map((header, i) => (
                    <TableCell
                      key={i}
                      className="text-black border-bottom"
                      sx={{
                        fontWeight: 500,
                        padding: "12px 20px",
                        fontSize: 14,
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {productStats.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell
                      className="text-black border-bottom"
                      sx={{ padding: "14px 20px", fontSize: 14 }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        {/* <img
                          src={product.icon} // make sure this is a valid image URL or base64
                          alt={product.name}
                          style={{
                            width: 24,
                            height: 24,
                            objectFit: "contain",
                          }}
                        /> */}
                        <span>{product.icon}</span>
                        {product.name}
                      </Box>
                    </TableCell>
                    <TableCell
                      className="text-black border-bottom"
                      sx={{ padding: "14px 20px", fontSize: 14 }}
                    >
                      {product.avgUpsell}
                    </TableCell>
                    <TableCell
                      className="text-black border-bottom"
                      sx={{ padding: "14px 20px", fontSize: 14 }}
                    >
                      {product.sold}
                    </TableCell>
                    <TableCell
                      className="text-black border-bottom"
                      sx={{ padding: "14px 20px", fontSize: 14 }}
                    >
                      {product.upsellPercent}%
                    </TableCell>
                    <TableCell
                      className="text-black border-bottom"
                      sx={{ padding: "14px 20px", fontSize: 14 }}
                    >
                      {product.totalSum}
                    </TableCell>
                    <TableCell
                      className="text-black border-bottom"
                      sx={{ padding: "14px 20px", fontSize: 14 }}
                    >
                      {product.profit}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Paper>
    </Card>
  );
}

export default ProductStatistics;
