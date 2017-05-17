import React from 'react';
import PropTypes from 'prop-types';

import {
  ProductSizingInfo
} from 'components';

import styles from './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className={styles['ProductDetails']}>
      <h2 className={styles["ProductDetails__title"]}>
        Product Details
      </h2>
      <div>
        <h3 className={styles["ProductDetails__title"]}>
          Unisex T-Shirt
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dignissimos?</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
      </div>
      <ProductSizingInfo />

    </div>
  );
};

export default ProductDetails;