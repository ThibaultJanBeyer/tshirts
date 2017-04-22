import React from "react";
// import PropTypes from "prop-types";

import { SubscribeEmail } from "components";

import styles from "./FooterMail.css";

const FooterMail = () => {
  return (
    <div>
      <h2 className={styles.title}>Subscribe for special offers and updates</h2>
      <SubscribeEmail />
    </div>
  );
};

export default FooterMail;
