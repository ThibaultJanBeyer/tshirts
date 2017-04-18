import React from "react";
import PropTypes from "prop-types";

import { theme, IconCart } from "components";

import style from "./CartButton.css";

const CartButton = () => {
  return (
    <button className={style.button} type="submit">
      <IconCart className={style.icon}/>
    </button>
  );
};

// Logo.propTypes = {
//   content: PropTypes.element,
//   viewBox: PropTypes.string,
//   png: PropTypes.boolean,
//   src: PropTypes.string,
//   alt: PropTypes.string,
// };

export default CartButton;
