import React from "react";
import PropTypes from "prop-types";

import {
  theme,
  FlexibleImg,
  GalleryItem
} from "components";

import help from "components/themes/helpers.css";
import styles from "./ArtistCard.css";

const ArtistCard = ({ user }) => {
  return (
    <div className={styles["artistcard"]}>

      <div className={styles["artistcard__head"]}>
        <FlexibleImg />
        <div className={styles["artistcard__head-content"]}>
          <div className={styles["artistcard__avatar"]}>
            <FlexibleImg />
          </div>
          <h3 className={styles["artistcard__name"]}>
            {user.name}
          </h3>
          <div className={styles["artistcard__info"]}>
            from {user.country}
          </div>
        </div>
      </div>

      <div className={styles["artistcard__body"]}>
        <div className={styles["artistcard__item"]}>
          <GalleryItem level={4} />
        </div>
        <div className={styles["artistcard__item"]}>
          <GalleryItem level={4} />
        </div>
        <div className={styles["artistcard__item"]}>
          <GalleryItem level={4} />
        </div>
        <div className={styles["artistcard__item"]}>
          <button className={`${styles["artistcard__item"]} ${styles["artistcard__item--more"]}`}>
            See more designs from <span className={`${help["nowrap"]}`}>{user.name}</span>
          </button>
        </div>
      </div>

    </div>
  );
};

ArtistCard.defaultProps = {
  user: {
    name: "thibault-jan-beyer",
    city: "Berlin",
    country: "Germany"
  }
};

ArtistCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default ArtistCard;