import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import style from "./GalleryItem.css";
import { 
  FlexibleImg,
  seoFriendlyUrl,
  theme
} from "components";

// see http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
const GalleryItem = ({ 
  user,
  level,
  price,
  title
}) => {

  const safeTitle = seoFriendlyUrl(title);
  const safeUsername = seoFriendlyUrl(user.username);

  let heading;
  if(level === 1) {
    heading = (
      <h1 className={style["galleryitem__title"]}>
        {title}
      </h1>
    );
  } else if(level === 2) {
    heading = (
      <h2 className={style["galleryitem__title"]}>
          {title}
      </h2>
    );
  } else if(level === 3) {
    heading = (
      <h3 className={style["galleryitem__title"]}>
          {title}
      </h3>
    );
  } else if(level === 4) {
    heading = (
      <h4 className={style["galleryitem__title"]}>
          {title}
      </h4>
    );
  }

  return (
    <div  className={style["galleryitem"]}>

      <div className={style["galleryitem__head"]}>
        <Link to={`shop/${safeUsername}/${safeTitle}`}>
          <FlexibleImg />
        </Link>
      </div>

      <div className={style["galleryitem__body"]}>
        <Link to={`shop/${safeUsername}/${safeTitle}`} className={theme.link}>
          {heading}
        </Link>
        <div>
          <div className={style["galleryitem__author"]}>
            by <Link to={safeUsername} className={theme.link}>
              {user.username}
            </Link>
          </div>
          <div className={style["galleryitem__price"]}>
            {price}
          </div>
        </div>
      </div>

    </div>
  );
};

GalleryItem.defaultProps = {
  user: {
    username: "thibault-jan-beyer",
  },
  level: 2,
  price: `${
          Math.floor(Math.random() * 9999)
          },${
          Math.floor(Math.random() * 99)
          }€`,
  title: "Lorem Ipsum"
};

GalleryItem.propTypes = {
  user: PropTypes.object,
  level: PropTypes.number,
  price: PropTypes.string,
  title: PropTypes.string
};

export default GalleryItem;
