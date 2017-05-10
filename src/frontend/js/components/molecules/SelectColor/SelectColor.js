import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';

// import style from './SelectColor.css';

const SelectColor = ({ property }) => {
  return (
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
  );
};

SelectColor.defaultProps = {
  property: 'something'
};

SelectColor.propTypes = {
  property: PropTypes.string
};

export default SelectColor;