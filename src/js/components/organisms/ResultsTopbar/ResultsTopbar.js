import React from "react";
import PropTypes from "prop-types";

import {
  OptionSort,
  CounterResults,
  theme
} from "components";

import styles from "./ResultsTopbar.css";

const ResultsTopbar = ({ sort, product, query }) => {
  return (
    <div className={`${theme.constrain} ${styles["ResultsTopbar"]}`}>
      <CounterResults title={`${sort} ${product} ${query}`} />
      <OptionSort sort={sort} />
    </div>
  );
};

ResultsTopbar.propTypes = {
  sort: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  query: PropTypes.string
};

export default ResultsTopbar;