import React from "react";
import styles from "./header.css";
import { theme } from "components";

const Header = () => {
  return (
    <header className={`${styles["header-yo"]} ${theme.c.primary}`}>
      Page Header
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