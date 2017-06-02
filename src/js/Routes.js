import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  ArtistsPage,
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
      <Route exact path="/artists">
        <ScrollToTop>
          <ArtistsPage />
        </ScrollToTop>
      </Route>
      <Route exact path="/shop/search/:query">
        <ScrollToTop>
          <ShopPage />
        </ScrollToTop>
      </Route>
      <Route exact path="/shop/:username/:itemId">
        <ScrollToTop>
          <ItemPage />
        </ScrollToTop>
      </Route>
      <Route exact path="/shop">
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