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
import StyledTable from "../../../../shared/StyledTable/StyledTable";
import { useNavigate } from "react-router-dom";
const productStats = [
  {
    icon: "📱",
    name: "Smart Band",
    avgUpsell: "130₴",
    sold: 5,
    upsellPercent: 75,
  },
  {
    icon: "🎧",
    name: "Headphone",
    avgUpsell: "977₴",
    sold: 7,
    upsellPercent: 98,
  },
  {
    icon: "🔊",
    name: "Bluetooth Speaker",
    avgUpsell: "435₴",
    sold: 34,
    upsellPercent: 55,
  },
  {
    icon: "🎶",
    name: "Airbuds 2nd Gen",
    avgUpsell: "577₴",
    sold: 1,
    upsellPercent: 29,
  },
];
const TabContent = ({ tabIndex }) => {
  const navigate = useNavigate();

  const handleClick = (scriptId) => {
    navigate(`/client/scripts/${scriptId}`);
  };
  if (tabIndex === 0) {
    return (
      <Card sx={{ px: 4, py: 3, borderRadius: "14px" }}>
        {" "}
        <StyledTable
          title="Крос товари"
          subtitle={null}
          headers={["Назва товару", "Час відкриття", "id", "Кількість", "", ""]}
          rows={productStats}
          renderRow={(product, index) => (
            // <TableRow key={index}>
            <TableRow onClick={() => handleClick("cross" + index)} key={index}>
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
              ></TableCell>
              <TableCell
                className="text-black border-bottom"
                sx={{ padding: "14px 20px", fontSize: 14 }}
              ></TableCell>
            </TableRow>
            // </TableRow>
          )}
        />
      </Card>
    );
  }

  return (
    <Card sx={{ px: 4, py: 3, borderRadius: "14px" }}>
      <StyledTable
        title="Основні товари "
        subtitle={null}
        headers={["Назва товару", "Час відкриття", "id", "Кількість", "", ""]}
        rows={productStats}
        renderRow={(product, index) => (
          <TableRow onClick={() => handleClick("main" + index)} key={index}>
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
            ></TableCell>
            <TableCell
              className="text-black border-bottom"
              sx={{ padding: "14px 20px", fontSize: 14 }}
            ></TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
};
export default TabContent;
