import React from "react";
import { 
  GalleryItem,
  theme
} from "components";

import styles from "./Gallery.css";

const Header = () => {
  return (
    <div className={`${theme.constrain} ${styles["gallery"]}`}>
      <h2 className={styles["gallery__title"]}>Featured</h2>
      <div className={styles["gallery__container"]}>
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
      </div>
    </div>
  );
};

export default Header;