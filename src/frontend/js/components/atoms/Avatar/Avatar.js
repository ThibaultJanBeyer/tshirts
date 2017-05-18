import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import {
  FlexibleImg,
} from 'components';

import style from './Avatar.css';

const Avatar = ({ source, alt }) => {
  return (
    <div className={style["Avatar"]}>
        <FlexibleImg source={source} alt={alt} />
    </div>
  );
};

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Avatar;
