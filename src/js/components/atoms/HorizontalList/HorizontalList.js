import React from "react";
import PropTypes from "prop-types";

import styles from "./HorizontalList.css";

const HorizontalList = ({ children }) => {
  return (
    <div className={styles["HorizontalList"]}>
      {children}
    </div>
  );
};

HorizontalList.propTypes = {
  children: PropTypes.node.isRequired
};

export default HorizontalList;
