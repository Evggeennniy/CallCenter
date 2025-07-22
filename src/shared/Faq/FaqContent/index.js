"use client";

import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// Styled components
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.9rem",
          color: "text.secondary",
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-content": {
    marginRight: theme.spacing(1),
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    marginLeft: "auto",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FaqAccordion = ({ items = [] }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "7px",
        mb: "25px",
      }}
      className="rmui-card"
    >
      <Box sx={{ width: "100%" }}>
        {items.map((item, index) => {
          const panelId = `panel${index + 1}`;
          return (
            <Accordion
              key={panelId}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
              className="toc-accordion bg-f6f7f9"
              sx={{
                border: "none",
                borderRadius: "3px",
                mt: index !== 0 ? "10px" : 0,
                width: "100%",
              }}
            >
              <AccordionSummary
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}
                className="bg-f6f7f9"
                sx={{
                  padding: "9px 25px",
                  borderRadius: "3px",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={600}
                  fontSize="14px"
                  className="text-black"
                >
                  {item.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  border: "none",
                  padding: "0 25px 5px",
                }}
              >
                <Typography sx={{ lineHeight: "1.8" }} mb="15px">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Card>
  );
};

export default FaqAccordion;
