import React from 'react';
import PropTypes from 'prop-types';

import { 
  FlexibleImg,
  ImagesPresentation
} from 'components';

import style from './ItemSettings.css';

const ItemSettings = ({ item }) => {
  return (
    <form className={style['ItemSettings']}>
      {/* title */}
      <h1>{item}</h1>

      {/* social bar */}
      <ul>
        <li>Like</li>
        <li>Comment</li>
        <li>Share</li>
      </ul>

      {/* selections */}
      <fieldset role="group" aria-labelledby="color">
        <legend id="color">Color</legend>
        <label>
          <input  type="radio"
                  name="color"
                  value="black" />
          Black
        </label>
        <label>
          <input  type="radio"
                  name="color"
                  value="black" />
          white
        </label>
      </fieldset>
      <fieldset role="group" aria-labelledby="size">
        <legend id="size">Size</legend>
        <label>
          <input  type="radio"
                  name="size"
                  value="black" />
          small
        </label>
        <label>
          <input  type="radio"
                  name="size"
                  value="black" />
          medium
        </label>
      </fieldset>
      <fieldset role="group" aria-labelledby="position">
        <legend id="position">Position</legend>
        <label>
          <input  type="radio"
                  name="position"
                  value="black" />
          front
        </label>
        <label>
          <input  type="radio"
                  name="position"
                  value="black" />
          back
        </label>
      </fieldset>

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
