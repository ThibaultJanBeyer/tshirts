import React from 'react';
import PropTypes from 'prop-types';

import { 
  FlexibleImg,
  ImagesPresentation,
  ItemSettings
} from 'components';

import style from './ItemPresentation.css';

const ItemPresentation = () => {
  return (
    <div className={style['ItemPresentation']}>

      <div className={style['ItemPresentation__images']}>
        <ImagesPresentation />
      </div>

      <div className={style['ItemPresentation__options']}>
        <ItemSettings />
      </div>

    </div>
  );
};

// ItemPresentation.defaultProps = {
//   item: 'something'
// };

// ItemPresentation.propTypes = {
//   item: PropTypes.string
// };

export default ItemPresentation;