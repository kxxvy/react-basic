import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "@/router";

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default memo(function App() {
  return (
    <HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>
  );
});
