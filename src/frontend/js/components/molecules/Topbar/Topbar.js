import React from "react";
import PropTypes from "prop-types";

import styles from "./Topbar.css";

const Topbar = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles.container}>
        <a className={styles.links}>Sell your Art</a>
        <a className={styles.links}>Login</a>
      </div>
    </div>
  );
};

export default Topbar;