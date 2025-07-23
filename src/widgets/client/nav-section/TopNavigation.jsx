import React from "react";
import TopNavbar from "../../../shared/Layout/TopNavbar";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DarkMode from "../../../shared/Layout/TopNavbar/DarkMode";
import FullscreenButton from "../../../shared/Layout/TopNavbar/FullscreenButton";
import Notifications from "../../../shared/Layout/TopNavbar/Notifications";
import Profile from "../../../shared/Layout/TopNavbar/Profile";
import ControlPanel from "../../../shared/Layout/ControlPanel";
import HorizontalNavbar from "../../../shared/Layout/TopNavbar/HorizontalNavbar";
function TopNavigation({ toggleSidebar }) {
  return (
    <TopNavbar
      toggleActive={toggleSidebar}
      leftContent={
        <>
          <IconButton onClick={toggleSidebar}>
            <i className="material-symbols-outlined">menu</i>
          </IconButton>
        </>
      }
      rightContent={
        <>
          <DarkMode />
          <FullscreenButton />
          <Notifications />
          <Profile />
          <ControlPanel />
        </>
      }
      bottomNav={<HorizontalNavbar />}
    />
  );
}

export default TopNavigation;
