import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../header";
import Routes from "../../Routes";

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
};
