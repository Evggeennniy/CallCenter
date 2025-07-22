import {
  Box,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function StyledTable({
  title,
  subtitle,
  headers,
  rows,
  renderRow,
}) {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",

        width: "100%",
      }}
      className="rmui-card"
    >
      <Paper elevation={0} sx={{ borderRadius: "7px" }} className="rmui-card">
        <CardContent sx={{ px: 0 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h3" fontWeight={600} fontSize="16px">
              {title}
            </Typography>
            {subtitle && (
              <Typography
                component="span"
                fontWeight={400}
                fontSize="14px"
                sx={{ color: "#9CA3AF" }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>

          <TableContainer
            component={Paper}
            className="rmui-table"
            sx={{ borderRadius: "7px" }}
          >
            <Table size="small">
              <TableHead className="bg-f6f7f9" sx={{ width: "100%" }}>
                <TableRow className="bg-f6f7f9">
                  {headers.map((header, i) => (
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
              <TableBody>{rows.map(renderRow)}</TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Paper>
    </Card>
  );
}
