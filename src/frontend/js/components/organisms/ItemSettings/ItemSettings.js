import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { 
  FlexibleImg,
  ImagesPresentation,
  ReactionBar,
  SelectColor,
  SelectPosition,
  SelectSize
} from 'components';

import style from './ItemSettings.css';

const ItemSettings = ({ item, location }) => {
  const artistsSelectedDefaultColor = "black";  // @TODO: replace this with store values
  const { color=artistsSelectedDefaultColor } = queryString.parse(location.search);

  console.log(color);
  return (
    <form className={style['ItemSettings']}>
      {/* title */}
      <h1>{item}</h1>

      {/* Reaction bar */}
      <ReactionBar />

      {/* selections */}
      <SelectColor checked={color} />
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
  item: PropTypes.string,
  location: PropTypes.object
};

export default withRouter(ItemSettings);
