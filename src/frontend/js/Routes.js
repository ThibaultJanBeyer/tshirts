import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage, ShopPage, NotFound } from "components";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route component={NotFound} />
    </div>
  );
};

export default Routes;