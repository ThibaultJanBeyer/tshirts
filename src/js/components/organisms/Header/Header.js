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
    <header className={styles["Header"]} role="banner">
      <section className={styles["Header__topbar"]}>
        <div className={styles["Header__container"]}>
          <Topbar />
        </div>
      </section>
      <section className={styles["Header__searcharea"]}>
        <div className={styles["Header__leftcontainer"]}>
          <Logo />
        </div>
        <div className={styles["Header__rightcontainer"]}>
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