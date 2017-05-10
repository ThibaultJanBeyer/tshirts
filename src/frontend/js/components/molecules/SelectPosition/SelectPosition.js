import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';

// import style from './SelectPosition.css';

const SelectPosition = ({ property }) => {
  return (
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
  );
};

SelectPosition.defaultProps = {
  property: 'something'
};

SelectPosition.propTypes = {
  property: PropTypes.string
};

export default SelectPosition;