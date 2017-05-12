import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';
import help from "components/themes/helpers.css";

import style from './SelectSize.css';

const SelectSize = ({ sizes, checked }) => {
  const Sizes = sizes.map(size => {
    const selected = size === checked;
    return (
      <label  key={size}
              className={
                `${
                  style["SelectSize__element"]
                  } ${
                  (selected) ? style["SelectSize__element--checked"] : ""
                }`
              } >

        <input  type="radio"
                className={help["visuallyhidden"]}
                name="size"
                value={size} />
        <span>{size}</span>

      </label>
    );
  });

  return (
    <fieldset role="group" aria-labelledby="size" className={style["SelectSize"]}>
      <legend id="size">Size</legend>
      {Sizes}
    </fieldset>
  );
};

SelectSize.defaultProps = {
  sizes: [
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl',
  ],
  checked: 'm'
};

SelectSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.string  // selected color
};

export default SelectSize;
