import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import Dashboard from "../pages/operator/dashboard/Dashboard";
import DashboardClient from "../pages/client/dashboard/Dashboard";
import Lms from "../pages/operator/lms/Lms";
import Rules from "../pages/operator/rules/Rules";
import Scripts from "../pages/operator/scripts/Scripts";
import ScriptsClient from "../pages/client/scripts/ScriptsClient";
import FAQClient from "../pages/client/faq/FAQClient";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/operator/dashboard" element={<Dashboard />} />
        <Route path="/operator/lms" element={<Lms />} />
        <Route path="/operator/rules" element={<Rules />} />
        <Route path="/operator/scripts" element={<Scripts />} />
        <Route path="/client/dashboard" element={<DashboardClient />} />
        <Route path="/client/scripts" element={<ScriptsClient />} />
        <Route path="/client/faq" element={<FAQClient />} />
      </Routes>
    </BrowserRouter>
  );
}
