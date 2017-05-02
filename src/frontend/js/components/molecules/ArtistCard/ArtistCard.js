import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  FlexibleImg,
  GalleryItem,
  seoFriendlyUrl,
  theme
} from "components";

import help from "components/themes/helpers.css";
import styles from "./ArtistCard.css";

const ArtistCard = ({ user }) => {
  const url = `shop/${seoFriendlyUrl(user.username)}`;

  return (
    <div className={styles["ArtistCard"]}>

      <div className={styles["ArtistCard__head"]}>
          <FlexibleImg />
          <Link to={url}>
            <span className={styles["ArtistCard__head-content"]}>
              <span className={styles["ArtistCard__avatar"]}>
                <FlexibleImg />
              </span>
              <h3 className={styles["ArtistCard__name"]}>
                {user.username}
              </h3>
              <span className={styles["ArtistCard__info"]}>
                from {user.country}
              </span>
            </span>
          </Link>
      </div>

      <div className={styles["ArtistCard__body"]}>
        <div className={styles["ArtistCard__item"]}>
          <GalleryItem level={4} />
        </div>
        <div className={styles["ArtistCard__item"]}>
          <GalleryItem level={4} />
        </div>
        <div className={styles["ArtistCard__item"]}>
          <GalleryItem level={4} />
        </div>
        <div className={styles["ArtistCard__item"]}>
          <Link to={url}>
            <span className={`${styles["ArtistCard__item"]} ${styles["ArtistCard__item--more"]}`}>
              +
            </span>
          </Link>
        </div>
      </div>

    </div>
  );
};

ArtistCard.defaultProps = {
  user: {
    username: "thibault-jan-beyer",
    city: "Berlin",
    country: "Germany"
  }
};

ArtistCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default ArtistCard;