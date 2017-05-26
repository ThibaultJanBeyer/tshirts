import React from 'react';
import PropTypes from 'prop-types';

import { 
  ButtonLike,
  ButtonShare,
  ButtonComment
} from 'components';

import style from './ReactionBar.css';

const ReactionBar = ({ property }) => {
  return (
    <ul className={style['ReactionBar']}>
      <li className={style['ReactionBar__item']}>
        <ButtonLike />
      </li>
      <li className={style['ReactionBar__item']}>
        <ButtonShare />
      </li>
      <li className={style['ReactionBar__item']}>
        <ButtonComment />
      </li>
    </ul>
  );
};

ReactionBar.defaultProps = {
  property: 'something'
};

ReactionBar.propTypes = {
  property: PropTypes.string
};

export default ReactionBar;