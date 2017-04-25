import React from "react";
import PropTypes from "prop-types";

import { theme } from "components";
import styles from "./SubscribeEmail.css";

const SubscribeEmail = () => {
  return (
    <div className={styles.container}>
      <input className={`${theme.input} ${styles.input}`} type="email" aria-label="email" placeholder="your@email" />
      <button className={styles.button} type="submit">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeEmail;
