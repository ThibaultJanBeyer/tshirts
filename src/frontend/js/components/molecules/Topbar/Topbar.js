import React from "react";
import PropTypes from "prop-types";

import styles from "./Topbar.css";

const Topbar = () => {
  return (
    <div className={styles["topbar"]}>
      <a className={styles["topbar__links"]}>Sell your Art</a>
      <a className={styles["topbar__links"]}>Login</a>
    </div>
  );
};

export default Topbar;