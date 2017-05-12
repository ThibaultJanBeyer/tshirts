import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';
import help from "components/themes/helpers.css";

import style from './SelectType.css';

const SelectType = ({ checked }) => {
  console.log(checked);
  return (
    <fieldset role="group" aria-labelledby="type" className={style["SelectType"]}>
      <legend id="type">Select Product Type</legend>
      {/* @TODO add click handler, opens popup with type choice */}
      <button className={style["SelectType__button"]}>{checked}</button>
    </fieldset>
  );
};

SelectType.defaultProps = {
  checked: "Unisex T-Shirt"
};

SelectType.propTypes = {
  checked: PropTypes.string.isRequired
};

export default SelectType;
