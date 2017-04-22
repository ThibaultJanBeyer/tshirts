import React from "react";

import styles from "./Footer.css";
import { FooterSocial, FooterMail, FooterMenu } from "components";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["subscriptions"]}>
          <div className={styles["subscription"]}>
            <FooterMail />
          </div>
          <div className={styles["subscription"]}>
            <FooterSocial />
          </div>
        </div>
        <FooterMenu />
      </div>
    </footer>
  );
};

export default Footer;