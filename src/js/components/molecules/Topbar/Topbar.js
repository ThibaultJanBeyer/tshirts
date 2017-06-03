import React from "react";

import styles from "./Topbar.css";
import { theme } from "components";

const Topbar = () => {
  return (
    <div className={styles["Topbar"]}>
      <a className={theme.link}>Sell your Art</a>
      <button className={theme.link} data-a11y-dialog-show="Dialog">Login</button>
    </div>
  );
};

export default Topbar;