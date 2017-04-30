import React from "react";
import PropTypes from "prop-types";

import { 
  Button,
  GalleryItem,
  theme
} from "components";

import styles from "./Gallery.css";

const Gallery = ({ title }) => {
  const titleNode = (title) ? (
    <h2 className={styles["gallery__title"]}>{title}</h2>
  ) : null;

  return (
    <div className={`${theme["constrain"]} ${styles["gallery"]}`}>
      {titleNode}
      <div className={styles["gallery__container"]}>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
        <div className={styles["gallery__item"]}>
          <GalleryItem level={3} />
        </div>
      </div>
      <Button content={`Load more ${title}`} primary />
    </div>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired
};

export default Gallery;