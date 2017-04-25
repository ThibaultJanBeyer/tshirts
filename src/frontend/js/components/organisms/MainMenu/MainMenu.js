import React from "react";

import { 
  TopMenu,
  theme
} from "components";

import styles from "./MainMenu.css";
import help from "components/themes/helpers.css";

const MainMenu = () => {
  return (
    <nav className={styles["mainmenu"]} role="navigation" aria-labelledby="menu">
      <div className={theme.constrain}>
        <h2 id="menu" className={help.visuallyhidden}>Main Menu</h2>
        <TopMenu />
      </div>
    </nav>
  );
};

export default MainMenu;