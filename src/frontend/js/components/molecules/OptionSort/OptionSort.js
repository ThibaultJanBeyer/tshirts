import React from "react";
import PropTypes from "prop-types";

import styles from "./OptionSort.css";

const OptionSort = ({ sort }) => {
  const options = [];
  const allOptions = [ 
    "newest",
    "featured",
    "popular"
  ];

  allOptions.forEach(function(option, i) {
    if(option === sort) {
      options.push((<option key={i} value={option} defaultValue>{option}</option>));
    } else {
      options.push((<option key={i} value={option}>{option}</option>));
    }
  });

  return (
    <div className={styles["OptionSort"]}>
      <label>
        Sort by: 
        <select name="sort" className={styles["OptionSort__select"]}>
          {options}
        </select>
      </label>
    </div>
  );
};

OptionSort.propTypes = {
  sort: PropTypes.string
};

export default OptionSort;