import React from "react";

import { theme, IconCart } from "components";

import style from "./CartButton.css";

const CartButton = () => {
  return (
    <button className={style.button} type="submit">
      <IconCart className={style.icon}/>
    </button>
  );
};

export default CartButton;
