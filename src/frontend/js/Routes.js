import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, ShopPage, NotFound } from "components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;