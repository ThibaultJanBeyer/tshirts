import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import style from "./GalleryItem.css";
import { 
  ImageWithTitle,
  seoFriendlyUrl,
  theme
} from "components";

// see http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
const GalleryItem = ({ 
    item,
    level,
    price
  }) => {

  const safeTitle = seoFriendlyUrl(item.title);
  const safeUsername = seoFriendlyUrl(item.owner);

  return (
    <ImageWithTitle title={item.title}
                    linkUrl={`/shop/${safeUsername}/${safeTitle}`}
                    imgAlt={item.title}
                    imgUrl={item.mainImage}
                    level={level}>

        <div className={style["GalleryItem__author"]}>
          by <Link to={safeUsername} className={theme.link}>
            {item.owner}
          </Link>
        </div>
        <div className={style["GalleryItem__price"]}>
          {price}
        </div>

    </ImageWithTitle>
  );
};

GalleryItem.defaultProps = {
  item: {
    owner: "thibault-jan-beyer",
    mainImage: `https://unsplash.it/${
          Math.floor(Math.random() * 200)
          }/${
          Math.floor(Math.random() * 300)
        }/?random`,
    title: "Lorem Ipsum"
  },
  level: 2,
  price: `${
          Math.floor(Math.random() * 9999)
          },${
          Math.floor(Math.random() * 99)
          }€`
};

GalleryItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  price: PropTypes.string,
  title: PropTypes.string,
};

export default GalleryItem;
