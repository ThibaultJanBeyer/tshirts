import React from "react";
import { 
  Topbar,
  Logo } from "components";

const Header = () => {
  return (
    <header>
      <Topbar />
      <Logo />
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