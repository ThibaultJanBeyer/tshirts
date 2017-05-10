import React from 'react';
import PropTypes from 'prop-types';

import { FlexibleImg } from 'components';

import style from './ImagesPresentation.css';

const ImagesPresentation = ({ images }) => {
  const imgs = images.map(
    (url, i) => (
      <div key={i} className={style['ImagesPresentation__small-img']}>
        <FlexibleImg />
      </div>
    )
  );
  return (
    <div className={style['ImagesPresentation']}>
      <div className={style['ImagesPresentation__small']}>
        {imgs}
      </div>
      <div className={style['ImagesPresentation__large']}>
        <FlexibleImg />
      </div>
    </div>
  );
};

ImagesPresentation.defaultProps = {
  images: ["one", "two", "three"]
};

ImagesPresentation.propTypes = {
  images: PropTypes.array
};

export default ImagesPresentation;