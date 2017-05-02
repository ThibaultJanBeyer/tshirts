import React from "react";
import PropTypes from "prop-types";

import { 
  Button,
  GalleryItem,
  theme
} from "components";

import styles from "./Gallery.css";

const Gallery = ({ title, titleNode, amount, level }) => {
  const TitleNode = (titleNode) ? (
    <h2 className={styles["gallery__title"]}>{title}</h2>
  ) : null;

  const ItemNodes = [];
  for (let i = 0; i < amount; i++)
    ItemNodes.push((
      <div key={i} className={styles["gallery__item"]}>
        <GalleryItem level={level} />
      </div>
    ));

  return (
    <div className={`${theme["constrain"]} ${styles["gallery"]}`}>
      {TitleNode}
      <div className={styles["gallery__container"]}>
        {ItemNodes}
      </div>
      <Button content={`Load more ${title}`} primary />
    </div>
  );
};

Gallery.defaultProps = {
  titleNode: true,
  amount: 8,
  level: 3
};

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  titleNode: PropTypes.bool,
  amount: PropTypes.integer,
  level: PropTypes.integer
};

export default Gallery;