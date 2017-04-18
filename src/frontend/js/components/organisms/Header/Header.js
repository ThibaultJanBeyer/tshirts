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
    <header role="banner">
      <section className={styles["section-grey"]}>
        <div className={styles["section-container"]}>
          <Topbar />
        </div>
      </section>
      <section className={styles["section-container"]}>
        <div className={styles.searchArea}>
          <Logo />
          <div className={styles.container}>
            <Searchbar />
            <CartButton />
          </div>
        </div>
      </section>
    </header>
  );
};

// Header.defaultProps = {
//   // myProp: 300
// }

// Header.propTypes = {
//   // PropType Requirement
// }

export default Header;