import React from "react";
import PropTypes from "prop-types";

import {
  ArtistCard,
  Button,
  theme
} from "components";

import styles from "./FeaturedArtists.css";

const FeaturedArtists = ({ title }) => {
  const titleNode = (title) ? (
    <h2 className={styles["featuredartists__title"]}>{title}</h2>
  ) : null;

  return (
    <div className={`${theme["constrain"]} ${styles["featuredartists"]}`}>
      {titleNode}
      <div className={styles["featuredartists__container"]}>
        <div className={styles["featuredartists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["featuredartists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["featuredartists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["featuredartists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["featuredartists__card"]}>
          <ArtistCard />
        </div>
        <div className={`${styles["featuredartists__card"]} ${styles["featuredartists__card--you"]}`}>
          <Button content="You? Start selling now!" primary />
        </div>
      </div>
    </div>
  );
};

FeaturedArtists.defaultProps = {
  title: "Featured Artists"
};

FeaturedArtists.propTypes = {
  title: PropTypes.string.isRequired
};

export default FeaturedArtists;