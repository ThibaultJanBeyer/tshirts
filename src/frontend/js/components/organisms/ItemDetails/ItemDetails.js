import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

// import {
//   Button
// } from 'components';

import style from './ItemDetails.css';

const ItemDetails = ({ item }) => {

  return (
    <div>
      <h2>Details</h2>
      <div>
        <h3>Designer</h3>
      </div>
      <div>
        <h3>Item</h3>
        <p>
          {item.title}
        </p>
        <p>
          {item.description}
        </p>
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
