import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { 
  ItemPage,
  HomePage,
  NotFound,
  ScrollToTop,
  ShopPage
} from "components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ScrollToTop>
          <HomePage />
        </ScrollToTop>
      </Route>
      <Route path="/shop/:username/:itemId">
        <ScrollToTop>
          <ItemPage />
        </ScrollToTop>
      </Route>
      <Route path="/shop">
        <ScrollToTop>
          <ShopPage />
        </ScrollToTop>
      </Route>
      <Route>
        <ScrollToTop>
          <NotFound />
        </ScrollToTop>
      </Route>
    </Switch>
  );
};

export default Routes;