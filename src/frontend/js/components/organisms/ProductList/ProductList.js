import React from 'react';
import PropTypes from 'prop-types';

import {
  FlexibleImg,
  HorizontalList,
  theme
} from 'components';

import styles from './ProductList.css';

const ProductList = ({ property }) => {
  return (
    <div className={styles['ProductList']}>
      <h2 className={styles["ProductList__title"]}>
        More Products
      </h2>
      <ul className={styles["ProductList__linklist"]}>
        <li className={`${theme["link"]} ${styles["ProductList__link"]}`}>
          Male
        </li>
        <li className={`${theme["link"]} ${styles["ProductList__link"]}`}>
          Female
        </li>
        <li className={`${theme["link"]} ${styles["ProductList__link"]}`}>
          Kids and Babies
        </li>
        <li className={`${theme["link"]} ${styles["ProductList__link"]}`}>
          Mugs
        </li>
        <li className={`${theme["link"]} ${styles["ProductList__link"]}`}>
          Posters
        </li>
      </ul>
      <HorizontalList>
        <div className={styles["ProductList__product"]}>
          <FlexibleImg />
          <h3>Product Name</h3>
        </div>
        <div className={styles["ProductList__product"]}>
          <FlexibleImg />
          <h3>Product Name</h3>
        </div>
        <div className={styles["ProductList__product"]}>
          <FlexibleImg />
          <h3>Product Name</h3>
        </div>
        <div className={styles["ProductList__product"]}>
          <FlexibleImg />
          <h3>Product Name</h3>
        </div>
        <div className={styles["ProductList__product"]}>
          <FlexibleImg />
          <h3>Product Name</h3>
        </div>
        <div className={styles["ProductList__product"]}>
          <FlexibleImg />
          <h3>Product Name</h3>
        </div>
      </HorizontalList>

    </div>
  );
};

ProductList.defaultProps = {
  property: 'something'
};

ProductList.propTypes = {
  property: PropTypes.string
};

export default ProductList;