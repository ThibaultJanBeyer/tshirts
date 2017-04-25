import React from 'react';
import { Route } from 'react-router-dom';

import { HomePage, ShopPage } from "components";

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
};

export default Routes;