import React from "react";

import { theme, IconSearch } from "components";

import style from "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className={style["Searchbar"]} role="search">
      <input  className={`${style["Searchbar__input"]} ${theme.input}`}
              type="search" aria-label="Search" 
              placeholder="search..." />
      <button className={style["Searchbar__button"]} type="submit">
        <IconSearch className={style["Searchbar__icon"]}/>
      </button>
    </div>
  );
};

export default Searchbar;
