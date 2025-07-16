import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

// Styled components
const Accordion = styled(MuiAccordion)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

// Main component
const LeftSidebarMenu = ({ toggleActive, menuSections = [], logo }) => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => location.pathname === path;

  const handleChange = (panelId) => (event, newExpanded) => {
    setExpanded(newExpanded ? panelId : false);
  };

  return (
    <Box className="leftSidebarDark hide-for-horizontal-nav">
      <Box className="left-sidebar-menu">
        <Box className="logo">
          <Link to="/">
            {logo || (
              <>
                <img
                  src="/images/logo.svg"
                  alt="logo-icon"
                  width={92}
                  height={35}
                />
              </>
            )}
          </Link>
        </Box>

        <Box className="burger-menu" onClick={toggleActive}>
          <Typography component={"span"} className="top-bar" />
          <Typography component={"span"} className="middle-bar" />
          <Typography component={"span"} className="bottom-bar" />
        </Box>

        <Box className="sidebar-inner">
          <Box className="sidebar-menu">
            {menuSections.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {section.title && (
                  <Typography
                    className="sub-title"
                    sx={{
                      display: "block",
                      fontWeight: "500",
                      textTransform: "uppercase",
                    }}
                  >
                    {section.title}
                  </Typography>
                )}

                {section.items.map((item, itemIndex) =>
                  item.subMenu ? (
                    <Accordion
                      key={itemIndex}
                      expanded={expanded === item.panelId}
                      onChange={handleChange(item.panelId)}
                      className="mat-accordion"
                    >
                      <AccordionSummary
                        expandIcon={
                          <ArrowForwardIosSharpIcon
                            sx={{ fontSize: "0.9rem" }}
                          />
                        }
                        aria-controls={`${item.panelId}-content`}
                        id={`${item.panelId}-header`}
                      >
                        {item.icon && (
                          <i className="material-symbols-outlined">
                            {item.icon}
                          </i>
                        )}
                        <Typography component={"span"} className="title">
                          {item.label}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails className="mat-details">
                        <ul className="sidebar-sub-menu">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li className="sidemenu-item" key={subIndex}>
                              <Link
                                to={subItem.path}
                                className={`sidemenu-link ${
                                  isActiveLink(subItem.path) ? "active" : ""
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Link
                      key={itemIndex}
                      to={item.path}
                      className={`sidebar-menu-link ${
                        isActiveLink(item.path) ? "active" : ""
                      }`}
                    >
                      {item.icon && (
                        <i className="material-symbols-outlined">{item.icon}</i>
                      )}
                      <Typography component={"span"} className="title">
                        {item.label}
                      </Typography>
                    </Link>
                  )
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebarMenu;
