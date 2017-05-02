import React from "react";
import PropTypes from "prop-types";

import styles from "./CounterResults.css";

const CounterResults = ({ title }) => {
  return (
    <div>
      <span className={styles["CounterResults__span"]}>
        4,389 results for
      </span>
      <h1 className={styles["CounterResults__title"]}>
        {title}
      </h1>
    </div>
  );
};

CounterResults.propTypes = {
  title: PropTypes.string.isRequired
};

export default CounterResults;