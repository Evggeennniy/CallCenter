import { useState, useEffect } from "react";

import AppRoutes from "./app/routes";

const App = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div className={`main-wrapper-content`}>
      <AppRoutes />
    </div>
  );
};

export default App;
