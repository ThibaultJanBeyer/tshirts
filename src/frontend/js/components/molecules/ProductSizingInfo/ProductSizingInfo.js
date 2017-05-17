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
      <div className={styles["ProductSizingInfo__sizes"]}>
        <div className={styles["ProductSizingInfo__img"]}>
          <FlexibleImg />
        </div>
        <table className={styles["ProductSizingInfo__table"]}>
          <thead>
            <tr className={styles["ProductSizingInfo__row--header"]}>
              <th className={styles["ProductSizingInfo__cell--header"]}></th>
              <th className={styles["ProductSizingInfo__cell--header"]}>S</th>
              <th className={styles["ProductSizingInfo__cell--header"]}>M</th>
              <th className={styles["ProductSizingInfo__cell--header"]}>L</th>
              <th className={styles["ProductSizingInfo__cell--header"]}>XL</th>
              <th className={styles["ProductSizingInfo__cell--header"]}>2XL</th>
              <th className={styles["ProductSizingInfo__cell--header"]}>3XL</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles["ProductSizingInfo__row"]}>
              <th className={styles["ProductSizingInfo__cell--head"]}>Chest</th>
              <td className={styles["ProductSizingInfo__cell"]}>92cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>102cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>112cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>122cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>132cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>142cm</td>
            </tr>
            <tr className={styles["ProductSizingInfo__row"]}>
              <th className={styles["ProductSizingInfo__cell--head"]}>Length</th>
              <td className={styles["ProductSizingInfo__cell"]}>71cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>74cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>76cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>79cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>81cm</td>
              <td className={styles["ProductSizingInfo__cell"]}>84cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductSizingInfo;