import React from "react";
import { 
  Topbar,
  Logo,
  Searchbar,
  CartButton
} from "components";

import styles from "./Header.css";

const Header = () => {
  return (
    <header className={styles["header"]} role="banner">
      <section className={styles["header__topbar"]}>
        <div className={styles["header__container"]}>
          <Topbar />
        </div>
      </section>
      <section className={styles["header__searcharea"]}>
        <div className={styles["header__leftcontainer"]}>
          <Logo />
        </div>
        <div className={styles["header__rightcontainer"]}>
          <div className={styles["searchbar__container"]}>
            <Searchbar />
          </div>
          <div className={styles["cartbutton__container"]}>
            <CartButton />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;