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

const ItemSettings = ({ item, location, match }) => {
  const title = match.params.itemId;

  const artistsSelectedDefaultColor = "black";  // @TODO: replace this with store values
  const artistsSelectedDefaultPosition = "front";  // @TODO: replace this with store values
  const artistsSelectedDefaultType = "Unisex T-Shirt";  // @TODO: replace this with store values
  const { color=artistsSelectedDefaultColor,
          size="m",
          position=artistsSelectedDefaultPosition,
          type=artistsSelectedDefaultType } = queryString.parse(location.search);

  const tomorrow = new Date(new Date().getDate() + 1);
  const delivery = {
    month: tomorrow.getDate() + 1,
    day: tomorrow.getDay()
  }

  return (
    <form className={style['ItemSettings']}>

      <div className={style['ItemSettings__title']}>
        <h1>{title}</h1>
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

      <div className={style['ItemSettings__submit']}>
        <Button content="Add to cart" primary />
      </div>

      <div className={style['ItemSettings__infobox']}>
        <p>
          Shipping to Germany available
        </p>
        <p className={style['ItemSettings__subinfo']}>
          Estimated delivery: <br />
          <span>{tomorrow.toLocaleDateString('de')}</span> (express)
        </p>
      </div>
    </form>
  );
};

ItemSettings.defaultProps = {
  item: 'Title'
};

ItemSettings.propTypes = {
  item: PropTypes.string,
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(ItemSettings);
