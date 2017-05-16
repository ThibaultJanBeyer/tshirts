import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import {
  FlexibleImg,
  seoFriendlyUrl,
  theme } from 'components';

import style from './ArtistHeader.css';

const ArtistHeader = ({ user }) => {
  const url = `shop/${seoFriendlyUrl(user.username)}`;

  return (
    <div className={style["ArtistHeader"]}>
        <FlexibleImg />
        <Link to={url} className={style["ArtistHeader__link"]}>
          <span className={style["ArtistHeader__container"]}>
            <span className={style["ArtistHeader__avatar"]}>
              <FlexibleImg />
            </span>
            <h3 className={style["ArtistHeader__name"]}>
              {user.username}
            </h3>
            <span className={style["ArtistHeader__info"]}>
              from {user.country}
            </span>
          </span>
        </Link>
    </div>
  );
};

ArtistHeader.defaultProps = {
  user: {
    username: "thibault-jan-beyer",
    city: "Berlin",
    country: "Germany"
  }
};

ArtistHeader.propTypes = {
  user: PropTypes.object.isRequired
};

export default ArtistHeader;