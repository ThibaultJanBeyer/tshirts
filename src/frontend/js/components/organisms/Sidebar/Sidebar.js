import React from "react";
import PropTypes from "prop-types";

import {
  OptionProduct,
  OptionTopTags
} from "components";

import styles from "./Sidebar.css";

const Sidebar = ({ sort, product }) => {
  return (
    <div className={styles["sidebar"]}>
      <div>
        <h3 className={styles["sidebar__title"]}>
          Options
        </h3>
        <div className={styles["sidebar__container"]}>
          <OptionProduct product={product} />
        </div>
        <div className={styles["sidebar__container"]}>
          <OptionTopTags />
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  sort: PropTypes.string,
  product: PropTypes.string
};

export default Sidebar;