import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { FlexibleImg, theme } from "components";
import style from "./GalleryItem.css";

// see http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
const GalleryItem = ({ level, title, designer, designerLink, link, price }) => {
  let heading;
  if(level === 1) {
    heading = (
      <h1 className={style["galleryitem__title"]}>
        <Link to={link} className={theme.link}>
          {title}
        </Link>
      </h1>
    );
  } else if(level === 2) {
    heading = (
      <h2 className={style["galleryitem__title"]}>
        <Link to={link} className={theme.link}>
          {title}
        </Link>
      </h2>
    );
  } else if(level === 3) {
    heading = (
      <h3 className={style["galleryitem__title"]}>
        <Link to={link} className={theme.link}>
          {title}
        </Link>
      </h3>
    );
  }

  return (
    <div className={style["galleryitem"]} role="search">
      <div className={style["galleryitem__head"]}>
        <FlexibleImg />
      </div>
      <div className={style["galleryitem__body"]}>
        {heading}
        <div>
          <div className={style["galleryitem__author"]}>
            by <Link to={designerLink} className={theme.link}>
              {designer}
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
  level: 2,
  title: "Lorem Ipsum",
  designer: "thibault-jan-beyer",
  designerLink: "/shop",
  link: "/shop",
  price: `${
          Math.floor(Math.random() * 9999)
          },${
          Math.floor(Math.random() * 99)
          }€`
};

GalleryItem.propTypes = {
  designer: PropTypes.string,
  designerLink: PropTypes.string,
  level: PropTypes.number,
  link: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string
};

export default GalleryItem;
