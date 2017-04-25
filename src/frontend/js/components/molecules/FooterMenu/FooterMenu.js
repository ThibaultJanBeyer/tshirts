import React from "react";

import styles from "./FooterMenu.css";

const FooterMenu = () => {
  const links = [ "lorem ipsum", "lorem ipsum dolor", "lorem", "lorem ipsum" ];
  const linkList = links.map((link, i) => <li key={i} className={styles["list-item"]}>{link}</li>);

  return (
    <div>
      <div className={styles["list-container"]}>
        <ul className={styles.list}>
          {linkList}
        </ul>
        <ul className={styles.list}>
          {linkList}
        </ul>
        <ul className={styles.list}>
          {linkList}
        </ul>
      </div>
      <div className={styles.copyright}>
        © xy. All Rights Reserved
      </div>
    </div>
  );
};

export default FooterMenu;
