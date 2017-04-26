import React from "react";
import PropTypes from "prop-types";

// import { theme, IconSearch } from "components";

import style from "./FlexibleImg.css";

const FlexibleImg = ({ source, altText }) => {
  return (
    <div className={style["flexibleimg"]}>
      <img src={source} alt={altText} className={style["flexibleimg__img"]}/>
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
  altText: PropTypes.string
};

export default FlexibleImg;
