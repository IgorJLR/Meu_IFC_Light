import React from "react";
import { Route, Switch } from "react-router-dom";

import Mapa from "./components/map";
import SearchResults from "./pages/searchResults";
import SearchCta from "./components/searchCta";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Mapa} />
      <Route path="/Meu_IFC_Light/search:id" component={SearchResults} />
      <Route render={() => <SearchCta />} />
    </Switch>
  );
}
