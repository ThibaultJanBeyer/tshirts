import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import {
  FlexibleImg
} from 'components';

import styles from './ItemDetails.css';

const ItemDetails = ({ item }) => {

  return (
    <div>
      <h2 className={styles["ItemDetails__title"]}>
        Details
      </h2>
      <div className={styles["ItemDetails__container"]}>
        <div className={styles["ItemDetails__designer"]}>
          <h3 className={styles["ItemDetails__title"]}>
            Designer
          </h3>
          <div>
            <div className={styles["ItemDetails__avatar"]}>
              <FlexibleImg />
            </div>
            <div className={styles["ItemDetails__info"]}>
              <p>Name • location</p>
              <p>bio</p>
            </div>
          </div>
        </div>
        <div className={styles["ItemDetails__item"]}>
          <h3 className={styles["ItemDetails__title"]}>
            Item
          </h3>
          <p>
            {item.title}
          </p>
          <p>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

ItemDetails.defaultProps = {
  item: {
    title: 'Title',
    description: 'lorem ipsum dolor sit amet zut ipsum zut amet sit lorem dolores.'
  }
};

ItemDetails.propTypes = {
  item: PropTypes.object
};

export default ItemDetails;
