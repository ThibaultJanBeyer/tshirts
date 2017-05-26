import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter } from 'react-router-dom';

import Routes from "Routes";

const app = document.getElementById("app");

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  ReactDOM.render((
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  ), app);
}

export default app;
