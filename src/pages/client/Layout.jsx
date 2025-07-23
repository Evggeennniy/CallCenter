import React from "react";
import { useNavToggle } from "../../shared/nav-toggler/useNavToggle";
import LeftNavigation from "../../widgets/client/nav-section/LeftNavigation";
import TopNavigation from "../../widgets/client/nav-section/TopNavigation";

function Layout({ children }) {
  const { active, toggleActive } = useNavToggle();
  return (
    <div className={`${active ? "active" : ""}`}>
      <LeftNavigation toggleActive={toggleActive} />
      <TopNavigation toggleSidebar={toggleActive} />

      <div className="main-content">{children}</div>
    </div>
  );
}

export default Layout;
