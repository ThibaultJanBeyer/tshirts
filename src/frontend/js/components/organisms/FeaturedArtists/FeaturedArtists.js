import React from "react";
import PropTypes from "prop-types";

import {
  ArtistCard,
  Button,
  HorizontalList,
  theme
} from "components";

import styles from "./FeaturedArtists.css";

const FeaturedArtists = ({ title }) => {
  const titleNode = (title) ? (
    <h2 className={styles["FeaturedArtists__title"]}>{title}</h2>
  ) : null;

  return (
    <div className={`${theme["constrain"]} ${styles["FeaturedArtists"]}`}>
      {titleNode}
      <HorizontalList>
        <div className={styles["FeaturedArtists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["FeaturedArtists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["FeaturedArtists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["FeaturedArtists__card"]}>
          <ArtistCard />
        </div>
        <div className={styles["FeaturedArtists__card"]}>
          <ArtistCard />
        </div>
        <div className={`${styles["FeaturedArtists__card"]} ${styles["FeaturedArtists__card--you"]}`}>
          <Button content="You? Start selling now!" primary />
        </div>
      </HorizontalList>
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