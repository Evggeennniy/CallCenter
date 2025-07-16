import { useState, useEffect } from "react";

import AppRoutes from "./app/routes";

const App = () => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <div>
      <AppRoutes />
    </div>
  );
};

export default App;
