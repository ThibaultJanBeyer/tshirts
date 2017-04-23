import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import { HomePage, ShopPage } from "components";

const app = document.getElementById("app");

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  </Router>
), app);
