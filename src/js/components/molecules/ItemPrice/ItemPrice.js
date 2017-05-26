import React from 'react';
import PropTypes from 'prop-types';

import {
  formatCurrency
} from 'components';

import style from './ItemPrice.css';

const ItemPrice = ({ color, _type }) => {
  const types = [  // @TODO get item types from backend
    {
      key: "Unisex T-Shirt",
      price: 2
    },
    {
      key: "Mug",
      price: 1
    }
  ];

  const basePrice = 8;  // @TODO get baseprice from backend
  let price = basePrice;
  if(color !== 'white') { price += 3; }

  types.forEach(type => (type.key === _type) ? price += type.price : false);

  return (
    <div className={style["ItemPrice"]}>
      <div className={style["ItemPrice__value"]}>{formatCurrency(price, "eu")}</div>
      <div>Includes VAT</div>
    </div>
  );
};

ItemPrice.defaultProps = {
  color: 'black',
  _type: 'Unisex T-Shirt'
};

ItemPrice.propTypes = {
  color: PropTypes.string.isRequired,
  _type: PropTypes.string.isRequired
};

export default ItemPrice;
