import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import style from "./ImageWithTitle.css";
import { 
  FlexibleImg,
  theme
} from "components";

// see http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
const ImageWithTitle = ({ 
  linkUrl,
  imgUrl,
  imgAlt,
  title,
  level,
  children
}) => {

  let heading;
  if(level === 1) {
    heading = (
      <h1 className={style["ImageWithTitle__title"]}>
        {title}
      </h1>
    );
  } else if(level === 2) {
    heading = (
      <h2 className={style["ImageWithTitle__title"]}>
          {title}
      </h2>
    );
  } else if(level === 3) {
    heading = (
      <h3 className={style["ImageWithTitle__title"]}>
          {title}
      </h3>
    );
  } else if(level === 4) {
    heading = (
      <h4 className={style["ImageWithTitle__title"]}>
          {title}
      </h4>
    );
  } else if(level === 0) {
    heading = (
      <p className={style["ImageWithTitle__title"]}>
          {title}
      </p>
    );
  }

  return (
    <div  className={style["ImageWithTitle"]}>

      <div className={style["ImageWithTitle__head"]}>
        <Link to={linkUrl}>
          <FlexibleImg source={imgUrl} altText={imgAlt}/>
        </Link>
      </div>

      <div className={style["ImageWithTitle__body"]}>
        <Link to={linkUrl} className={theme.link}>
          {heading}
        </Link>
        <div>
          {children}
        </div>
      </div>

    </div>
  );
};

ImageWithTitle.defaultProps = {
  level: 0,
  linkUrl: "/"
};

ImageWithTitle.propTypes = {
  children: PropTypes.node,
  imgAlt: PropTypes.string,
  imgUrl: PropTypes.string,
  level: PropTypes.number,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default ImageWithTitle;
