import React from "react";

import styles from "./Footer.css";
import { FooterSocial, FooterMail, FooterMenu } from "components";

const Footer = () => {
  return (
    <footer className={styles["Footer"]}>
      <div className={styles["Footer__container"]}>
        <div className={styles["Footer__subscriptions"]}>
          <div className={styles["Footer__subscription"]}>
            <FooterMail />
          </div>
          <div className={styles["Footer__subscription"]}>
            <FooterSocial />
          </div>
        </div>
        <FooterMenu />
      </div>
    </footer>
  );
};

export default Footer;