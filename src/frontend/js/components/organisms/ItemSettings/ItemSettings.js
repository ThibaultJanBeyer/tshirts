import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { 
  Button,
  FlexibleImg,
  ImagesPresentation,
  ItemPrice,
  ReactionBar,
  SelectColor,
  SelectPosition,
  SelectSize,
  SelectType
} from 'components';

import style from './ItemSettings.css';

const ItemSettings = ({ item, location }) => {
  const artistsSelectedDefaultColor = "black";  // @TODO: replace this with store values
  const artistsSelectedDefaultPosition = "front";  // @TODO: replace this with store values
  const artistsSelectedDefaultType = "Unisex T-Shirt";  // @TODO: replace this with store values
  const { color=artistsSelectedDefaultColor,
          size="m",
          position=artistsSelectedDefaultPosition,
          type=artistsSelectedDefaultType } = queryString.parse(location.search);

  return (
    <form className={style['ItemSettings']}>

      <div className={style['ItemSettings__container']}>
        <h1>{item}</h1>
        <ReactionBar />
      </div>

      <div className={style['ItemSettings__container']}>
        <SelectType checked={type} />
      </div>
      <div className={style['ItemSettings__container']}>
        <SelectColor checked={color} />
      </div>
      <div className={style['ItemSettings__container']}>
        <SelectSize checked={size} />
      </div>
      <div className={style['ItemSettings__container']}>
        <SelectPosition checked={position} />
      </div>

      <div className={style['ItemSettings__container']}>
        <ItemPrice color={color} _type={type}/>
      </div>

      <div className={`${style['ItemSettings__container']} ${style['ItemSettings__submit']}`}>
        <Button content="Add to cart" primary />
      </div>

      <div>
        <p>
          Shipping to Germany available
        </p>
        <p>
          Estimated delivery:
          10. May (express)
          12. May (standart)
        </p>
      </div>
    </form>
  );
};

ItemSettings.defaultProps = {
  item: 'something'
};

ItemSettings.propTypes = {
  item: PropTypes.string,
  location: PropTypes.object
};

export default withRouter(ItemSettings);
