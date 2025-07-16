import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/operator/dashboard/Dashboard";
import MainWrapper from "../shared/Layout/MainWrapper";
import Lms from "../pages/operator/lms/Lms";
import Rules from "../pages/operator/rules/Rules";
import Scripts from "../pages/operator/scripts/Scripts";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route path="/operator/dashboard" element={<Dashboard />} />
          <Route path="/operator/lms" element={<Lms />} />
          <Route path="/operator/rules" element={<Rules />} />
          <Route path="/operator/scripts" element={<Scripts />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}
