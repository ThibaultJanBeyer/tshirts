import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';
import help from "components/themes/helpers.css";

import style from './SelectPosition.css';

const SelectPosition = ({ positions, checked }) => {
  const Positions = positions.map(position => {
    const selected = position === checked;
    return (
      <label  key={position}
              className={
                `${
                  style["SelectPosition__element"]
                  } ${
                  (selected) ? style["SelectPosition__element--checked"] : ""
                }`
              } >

        <input  type="radio"
                className={help["visuallyhidden"]}
                name="position"
                value={position} />
        <span>{position}</span>

      </label>
    );
  });

  return (
    <fieldset role="group" aria-labelledby="position" className={style["SelectPosition"]}>
      <legend id="position">position</legend>
      {Positions}
    </fieldset>
  );
};

SelectPosition.defaultProps = {
  positions: [
    'front',
    'back'
  ],
  checked: 'front'
};

SelectPosition.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.string),
  checked: PropTypes.string  // selected color
};

export default SelectPosition;
