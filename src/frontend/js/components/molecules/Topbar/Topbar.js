import React from "react";

import styles from "./Topbar.css";
import { theme } from "components";

const Topbar = () => {
  return (
    <div className={styles["Topbar"]}>
      <a className={theme.link}>Sell your Art</a>
      <a className={theme.link}>Login</a>
    </div>
  );
};

export default Topbar;