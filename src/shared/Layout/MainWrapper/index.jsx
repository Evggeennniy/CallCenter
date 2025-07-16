import React from "react";
import ScrollToTop from "../ScrollToTop";

function MainWrapper({ children }) {
  return (
    <div className="main-content">
      <ScrollToTop />
      {children}
    </div>
  );
}

export default MainWrapper;
