import React from "react";
import PropTypes from "prop-types";

import { 
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
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
        <GalleryItem level={3} />
      </div>
      <button className={`${theme["button"]}`}>
        <span className={`${theme["button__helper"]}`}>
          Load more {title}
        </span>
      </button>
    </div>
  );
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired
};

export default Gallery;