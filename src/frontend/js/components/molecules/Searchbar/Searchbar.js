import React from "react";

import { theme, IconSearch } from "components";

import style from "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className={style.container} role="search">
      <input className={`${style.input} ${theme.input}`} type="search" aria-label="Search" placeholder="search..." />
      <button className={style.button} type="submit">
        <IconSearch className={style.icon}/>
      </button>
    </div>
  );
};

export default Searchbar;
