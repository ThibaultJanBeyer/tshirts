import React from "react";
import PropTypes from "prop-types";

// import { theme, IconSearch } from "components";

import style from "./FlexibleImg.css";

const FlexibleImg = ({ source, title }) => {
  return (
    <div className={style["flexibleimg"]}>
      <img src={source} alt={title} className={style["flexibleimg__img"]}/>
    </div>
  );
};

FlexibleImg.defaultProps = {
  source: `https://unsplash.it/${
          Math.floor(Math.random() * 500)
          }/${
          Math.floor(Math.random() * 500)
          }/?random`
};

FlexibleImg.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string
};

export default FlexibleImg;
