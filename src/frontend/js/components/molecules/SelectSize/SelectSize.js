import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';

// import style from './SelectSize.css';

const SelectSize = ({ property }) => {
  return (
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
  );
};

SelectSize.defaultProps = {
  property: 'something'
};

SelectSize.propTypes = {
  property: PropTypes.string
};

export default SelectSize;