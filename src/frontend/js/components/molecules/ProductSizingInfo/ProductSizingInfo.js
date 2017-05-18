import React from 'react';
import PropTypes from 'prop-types';

import {
  FlexibleImg
} from 'components';

import styles from './ProductSizingInfo.css';

const ProductSizingInfo = () => {
  return (
    <div className={styles['ProductSizingInfo']}>
      <h3 className={styles["ProductSizingInfo__title"]}>
        Size Information
      </h3>
      <div>
        <div className={styles["ProductSizingInfo__img"]}>
          <FlexibleImg />
        </div>
        <table className={styles["ProductSizingInfo__table"]}>
          <thead>
            <tr>
              <th/>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>2XL</th>
              <th>3XL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Chest</th>
              <td>92cm</td>
              <td>102cm</td>
              <td>112cm</td>
              <td>122cm</td>
              <td>132cm</td>
              <td>142cm</td>
            </tr>
            <tr>
              <th>Length</th>
              <td>71cm</td>
              <td>74cm</td>
              <td>76cm</td>
              <td>79cm</td>
              <td>81cm</td>
              <td>84cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSizingInfo;