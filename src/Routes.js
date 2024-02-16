import React from "react";
import { Route } from "react-router-dom";

import Mapa from "./components/map";
import SearchResults from "./pages/searchResults";
import SearchCta from "./components/searchCta";

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Mapa} />
      <Route path="/meifc" component={SearchCta} />
      <Route path="/search:id" component={SearchResults} />
    </>
  );
};
