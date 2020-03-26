import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  PageLayout,
  HomePage,
  CartPage,
} from '../pages';

const App = () => {
  return (
    <PageLayout>
      <Switch>
        <Route
          path="/"
          component={HomePage}
          exact
        />

        <Route
          path="/cart"
          component={CartPage}
          exact
        />
      </Switch>
    </PageLayout>
  );
}

export default App;
