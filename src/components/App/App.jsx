import React from "react";
import { Route, Switch } from "react-router-dom";
import { routeNames } from "../../constants";

import { PageLayout, HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route path={routeNames.HOME} component={HomePage} exact />

        <Route path={routeNames.CART} component={CartPage} exact />
      </Switch>
    </PageLayout>
  );
};

export default App;
