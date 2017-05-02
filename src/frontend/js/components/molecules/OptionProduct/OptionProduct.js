import React from "react";
import PropTypes from "prop-types";

import styles from "./OptionProduct.css";

const OptionProduct = ({ product }) => {
  const options = [];
  const allProducts = [ "mugs", "tshirts", "posters" ];

  allProducts.forEach(function(prod, i) {
    if(prod === product) {
      options.push((
        <label className={styles["optionproduct__label"]}>
          <input  type="radio"
                  className={styles["optionproduct__input"]}
                  name="products"
                  checked
                  value={prod} />
          {prod}
        </label>
      ));
    } else {
      options.push((
        <label className={styles["optionproduct__label"]}>
          <input  type="radio"
                  className={styles["optionproduct__input"]}
                  name="products"
                  value={prod} />
          {prod}
        </label>
      ));
    }
  });

  return (
    <fieldset className={styles["optionproduct"]} role="group" aria-labelledby="products">
      <legend className={styles["optionproduct__legend"]} id="products">
        Products:
      </legend>
      {options}
    </fieldset>
  );
};

OptionProduct.propTypes = {
  product: PropTypes.string
};

export default OptionProduct;