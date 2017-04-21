import React from "react";
// import PropTypes from "prop-types";

// import { theme, IconSearch } from "components";

import style from "./SocialFooter.css";

const SocialFooter = () => {
  return (
    <div className={style.container} role="search">
      <h2>Find us on Facebook</h2>
      <input type="text"/>
    </div>
  );
};

export default SocialFooter;
