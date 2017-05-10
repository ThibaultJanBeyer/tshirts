import React from 'react';
import PropTypes from 'prop-types';

import { 
  FlexibleImg,
  ImagesPresentation,
  ReactionBar,
  SelectColor,
  SelectPosition,
  SelectSize
} from 'components';

import style from './ItemSettings.css';

const ItemSettings = ({ item }) => {
  return (
    <form className={style['ItemSettings']}>
      {/* title */}
      <h1>{item}</h1>

      {/* Reaction bar */}
      <ReactionBar />

      {/* selections */}
      <SelectColor />
      <SelectSize />
      <SelectPosition />

      {/* type selection */}
      <button>Change Producs Type</button>

      {/* price */}
      <div>
        15€
        Includes VAT
      </div>

      {/* add to cart */}
      <input type="submit" value="add to cart" />

      {/*additiona info*/}
      <div>
        <p>
          Shipping to Germany available
        </p>
        <p>
          Estimated delivery:
          10. May (express)
          12. May (standart)
        </p>
      </div>
    </form>
  );
};

ItemSettings.defaultProps = {
  item: 'something'
};

ItemSettings.propTypes = {
  item: PropTypes.string
};

export default ItemSettings;
