import React from "react";

import styles from "./TopMenu.css";
import { theme } from "components";

const TopMenu = () => {
  const links = [ "Home", "Newest", "Featured", "Most Popular", "Artists", "Make your own" ];

  const linkList = links.map((link, i) => {
    return (
      <li key={i} className={styles["list-item"]}>
        <a href="#" className={theme.link}>{link}</a>
      </li>
    );
  });

  return (
    <ul className={styles["list"]}>
      {linkList}
    </ul>
  );
};

export default TopMenu;