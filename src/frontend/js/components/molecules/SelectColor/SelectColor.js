import React from 'react';
import PropTypes from 'prop-types';

import { queryHelper } from 'components';
import help from "components/themes/helpers.css";

import style from './SelectColor.css';

const SelectColor = ({ colors, checked }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    // @TODO add store state changes
  };

  const Colors = colors.map(color => (
    <label  key={color.key}
            className={
              `${
                style["SelectColor__element"]
                } ${
                (color.key === checked) ? style["SelectColor__element--checked"] : ""
              }`
            }
            style={{ background: color.hex }} >

      <input  type="radio"
              className={help["visuallyhidden"]}
              name="color"
              onChange={handleChange}
              value={color.key} />
      <span className={help["visuallyhidden"]}>{color.key}</span>

    </label>
  ));

  return (
    <fieldset role="group" aria-labelledby="color">
      <legend id="color">Color</legend>
      {Colors}
    </fieldset>
  );
};

SelectColor.defaultProps = {
  colors: [
    {
      key: "white",
      hex: "#fff"
    },
    {
      key: "black",
      hex: "#000"
    },
    {
      key: "red",
      hex: "#f00"
    },
    {
      key: "green",
      hex: "#0f0"
    },
    {
      key: "blue",
      hex: "#00f"
    }
  ]
};

SelectColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
  color: PropTypes.string  // selected color
};

export default SelectColor;