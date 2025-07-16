import React, { useEffect } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";

const TopNavbar = ({
  toggleActive,
  leftContent = null,
  rightContent = null,
  bottomNav = null,
  stickyScroll = true,
}) => {
  useEffect(() => {
    if (!stickyScroll) return;

    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [stickyScroll]);

  return (
    <div className="top-navbar-dark">
      <AppBar
        id="navbar"
        color="inherit"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "initial",
          borderRadius: "0 0 15px 15px",
          py: { xs: "15px", sm: "3px" },
          width: "auto",
          zIndex: "489",
        }}
        className="top-navbar"
      >
        <Box className="top-navbar-content">
          <Toolbar
            sx={{
              display: { xs: "block", sm: "flex" },
              justifyContent: { xs: "center", sm: "space-between" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "10px", sm: "5px", md: "15px" },
              }}
            >
              {leftContent}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: "8px", sm: "8px", lg: "15px" },
                mt: { xs: "10px", sm: "0px" },
              }}
            >
              {rightContent}
            </Box>
          </Toolbar>
        </Box>

        {bottomNav}
      </AppBar>
    </div>
  );
};

export default TopNavbar;
