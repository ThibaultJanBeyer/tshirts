import React from "react";
import PropTypes from "prop-types";

import {
  OptionSort,
  theme
} from "components";

import styles from "./ResultsCounter.css";

const ResultsCounter = ({ sort, product }) => {
  return (
    <div className={`${theme.constrain} ${styles["resultscounter"]}`}>
      <div className={styles["resultscounter__info"]}>
        <span className={styles["resultscounter__span"]}>
          4,389 results for
        </span>
        <h1 className={styles["resultscounter__title"]}>
          {sort} {product}
        </h1>
      </div>
      <div className={styles["resultscounter__sort"]}>
        <OptionSort sort={sort} />
      </div>
    </div>
  );
};

ResultsCounter.propTypes = {
  sort: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired
};

export default ResultsCounter;