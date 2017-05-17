import React from 'react';
import PropTypes from 'prop-types';

import {
  ImageWithTitle,
  HorizontalList,
  theme
} from 'components';

import styles from './ProductList.css';

const ProductList = () => {
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
          <ImageWithTitle title="Product Name 1"
                          linkUrl="/" />
        </div>
        <div className={styles["ProductList__product"]}>
          <ImageWithTitle title="Product Name 2"
                          linkUrl="/" />
        </div>
        <div className={styles["ProductList__product"]}>
          <ImageWithTitle title="Product Name 3"
                          linkUrl="/" />
        </div>
      </HorizontalList>

    </div>
  );
};

export default ProductList;