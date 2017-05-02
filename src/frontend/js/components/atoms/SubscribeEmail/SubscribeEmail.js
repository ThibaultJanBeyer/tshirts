import React from "react";
import PropTypes from "prop-types";

import { theme } from "components";
import styles from "./SubscribeEmail.css";

const SubscribeEmail = () => {
  return (
    <div className={styles["SubscribeEmail"]}>
      <input  className={`${theme.input} ${styles["SubscribeEmail__input"]}`} 
              type="email"
              aria-label="email"
              placeholder="your@email" />
      <button className={styles["SubscribeEmail__button"]}
              type="submit" >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeEmail;
