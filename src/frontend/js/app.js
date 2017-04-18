import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
// eslint-disable-next-line import/no-unresolved
import { HomePage } from "components";

const app = document.getElementById("app");

ReactDOM.render(<HomePage />, app);
