import React from "react";

import { theme, IconCart } from "components";

import style from "./CartButton.css";

const CartButton = () => {
  return (
    <button className={style["CartButton"]} type="submit">
      <IconCart className={style["CartButton__icon"]}/>
    </button>
  );
};

export default CartButton;
