import React from "react";

import { FacebookEmbed } from "components";

import styles from "./FooterSocial.css";

const FooterSocial = () => {
  return (
    <div>
      <h2 className={styles["FooterSocial__title"]}>Follow us on Facebook</h2>
      <FacebookEmbed />
    </div>
  );
};

export default FooterSocial;
