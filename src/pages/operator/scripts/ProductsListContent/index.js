"use client";

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
} from "@mui/material";
import { Link } from "react-router-dom";

function createData(
  orderID,
  productImage,
  productName,
  date,
  category,
  price,
  order,
  stock,
  amount,
  rating,
  status,
  detailsLink
) {
  return {
    orderID,
    productImage,
    productName,
    date,
    category,
    price,
    order,
    stock,
    amount,
    rating,
    status,
    detailsLink,
  };
}

const rows = [
  createData(
    "#JAN-999",
    "/images/products/product1.jpg",
    "Smart Band",
    "08 Jun 2024",
    "Watch",
    "$35.00",
    75,
    "750",
    "$2,625",
    "5.00 (141 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-998",
    "/images/products/product2.jpg",
    "Headphone",
    "07 Jun 2024",
    "Electronics",
    "$49.00",
    25,
    "825",
    "$1,225",
    "5.00 (69 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-997",
    "/images/products/product3.jpg",
    "iPhone 15 Plus",
    "06 Jun 2024",
    "Apple",
    "$99.00",
    55,
    "Stock Out",
    "$5,445",
    "5.00 (99 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-996",
    "/images/products/product4.jpg",
    "Bluetooth Speaker",
    "05 Jun 2024",
    "Google",
    "$59.00",
    40,
    "535",
    "$2,360",
    "4.00 (75 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-995",
    "/images/products/product5.jpg",
    "Airbuds 2nd Gen",
    "04 Jun 2024",
    "Headphone",
    "$79.00",
    56,
    "460",
    "$4,424",
    "5.00 (158 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-994",
    "/images/products/product1.jpg",
    "Smart Band",
    "08 Jun 2024",
    "Watch",
    "$35.00",
    75,
    "750",
    "$2,625",
    "5.00 (141 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-993",
    "/images/products/product2.jpg",
    "Headphone",
    "07 Jun 2024",
    "Electronics",
    "$49.00",
    25,
    "825",
    "$1,225",
    "5.00 (69 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-992",
    "/images/products/product3.jpg",
    "iPhone 15 Plus",
    "06 Jun 2024",
    "Apple",
    "$99.00",
    55,
    "Stock Out",
    "$5,445",
    "5.00 (99 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-991",
    "/images/products/product4.jpg",
    "Bluetooth Speaker",
    "05 Jun 2024",
    "Google",
    "$59.00",
    40,
    "535",
    "$2,360",
    "4.00 (75 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-990",
    "/images/products/product5.jpg",
    "Airbuds 2nd Gen",
    "04 Jun 2024",
    "Headphone",
    "$79.00",
    56,
    "460",
    "$4,424",
    "5.00 (158 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-989",
    "/images/products/product1.jpg",
    "Smart Band",
    "08 Jun 2024",
    "Watch",
    "$35.00",
    75,
    "750",
    "$2,625",
    "5.00 (141 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-988",
    "/images/products/product2.jpg",
    "Headphone",
    "07 Jun 2024",
    "Electronics",
    "$49.00",
    25,
    "825",
    "$1,225",
    "5.00 (69 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-987",
    "/images/products/product3.jpg",
    "iPhone 15 Plus",
    "06 Jun 2024",
    "Apple",
    "$99.00",
    55,
    "Stock Out",
    "$5,445",
    "5.00 (99 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-986",
    "/images/products/product4.jpg",
    "Bluetooth Speaker",
    "05 Jun 2024",
    "Google",
    "$59.00",
    40,
    "535",
    "$2,360",
    "4.00 (75 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-985",
    "/images/products/product5.jpg",
    "Airbuds 2nd Gen",
    "04 Jun 2024",
    "Headphone",
    "$79.00",
    56,
    "460",
    "$4,424",
    "5.00 (158 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-984",
    "/images/products/product1.jpg",
    "Smart Band",
    "08 Jun 2024",
    "Watch",
    "$35.00",
    75,
    "750",
    "$2,625",
    "5.00 (141 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-983",
    "/images/products/product2.jpg",
    "Headphone",
    "07 Jun 2024",
    "Electronics",
    "$49.00",
    25,
    "825",
    "$1,225",
    "5.00 (69 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-982",
    "/images/products/product3.jpg",
    "iPhone 15 Plus",
    "06 Jun 2024",
    "Apple",
    "$99.00",
    55,
    "Stock Out",
    "$5,445",
    "5.00 (99 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-981",
    "/images/products/product4.jpg",
    "Bluetooth Speaker",
    "05 Jun 2024",
    "Google",
    "$59.00",
    40,
    "535",
    "$2,360",
    "4.00 (75 reviews)",
    "Published",
    "/ecommerce/products-list/details/"
  ),
  createData(
    "#JAN-980",
    "/images/products/product5.jpg",
    "Airbuds 2nd Gen",
    "04 Jun 2024",
    "Headphone",
    "$79.00",
    56,
    "460",
    "$4,424",
    "5.00 (158 reviews)",
    "Draft",
    "/ecommerce/products-list/details/"
  ),
].sort((b, a) => (a.orderID < b.orderID ? -1 : 1));

const ProductsListContent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = rows.filter((row) =>
    row.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "7px",
          mb: "25px",
          padding: { xs: "18px", sm: "20px", lg: "25px" },
        }}
        className="rmui-card"
      >
  
        <Box>
          <h1 style={{ color: "#fff", fontSize: "24px", marginBottom: "20px" }}>
        Скрипти та характеристики
      </h1>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
              borderRadius: "7px",
            }}
            className="rmui-table border"
          >
            <Table sx={{ minWidth: 1250 }} aria-label="Table">
              <TableHead className="bg-f6f7f9">
                <TableRow
                  sx={{
                    th: {
                      fontWeight: "500",
                      padding: "10px 20px",
                      fontSize: "14px",
                    },
                  }}
                >
                  <TableCell className="text-black border-bottom">Назва товару</TableCell>
                  <TableCell className="text-black border-bottom">Час відкриття</TableCell>
                  <TableCell className="text-black border-bottom">&nbsp;</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {(rowsPerPage > 0
                  ? filteredRows.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : filteredRows
                ).map((row) => (
                  <TableRow
                    key={row.orderID}
                    sx={{
                      td: {
                        padding: "14px 20px",
                        fontSize: "14px",
                      },
                    }}
                  >
                    <TableCell className="border-bottom">
                      <Box sx={{ display: "flex", alignItems: "center", gap: "13px" }}>
                        <Box sx={{ flexShrink: "0" }}>
                          <img
                            src={row.productImage}
                            alt="Product"
                            width={40}
                            height={40}
                            style={{ borderRadius: "7px" }}
                          />
                        </Box>
                        <Typography sx={{ fontSize: "15px", fontWeight: "500" }} className="text-black">
                          {row.productName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell className="border-bottom">
                      {row.date}
                    </TableCell>
                    <TableCell className="border-bottom" align="right">
                      <Link
                        to={row.detailsLink}
                        style={{ color: "#6A4FFF", fontWeight: 500, cursor: "pointer" }}
                      >
                        Скрипт
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Card>
    </>
  );
};

export default ProductsListContent;
