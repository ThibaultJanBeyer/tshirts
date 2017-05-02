import React from "react";
import { Link } from "react-router-dom";

import styles from "./TopMenu.css";
import { theme } from "components";

const TopMenu = () => {
  const links = {
    "Home": "/",
    "Newest": "/shop",
    "Featured": "/shop?sort=featured&product=posters",
    "Most Popular": "/shop?sort=popular&product=mugs",
    "Artists": "/artists",
    "Make your own": "/designer"
  };

  let linkList = [];
  for (const name in links) {
    if (links.hasOwnProperty(name)) {
      const url = links[name];
      linkList.push(
        (
          <li key={name} className={styles["list-item"]}>
            <Link to={`${url}`} className={theme.link}>{name}</Link>
          </li>
        )
      );
    }
  }

  return (
    <ul className={styles["list"]}>
      {linkList}
    </ul>
  );
};

export default TopMenu;