import React from 'react';
import PropTypes from 'prop-types';

import { FlexibleImg } from 'components';

import style from './ImagesPresentation.css';

class ImagesPresentation extends React.Component {


  render() {
    const imgs = this.props.images.map(
      (url, i) => (
        <div key={i} 
            className={style['ImagesPresentation__small-img']}
            onClick={this.changeImg}>

          <FlexibleImg source={url} />

        </div>
      )
    );
    return (
      <div className={style['ImagesPresentation']}>
        <div className={style['ImagesPresentation__small']}>
          {imgs}
        </div>
        <div className={style['ImagesPresentation__large']}>
          <FlexibleImg />
        </div>
      </div>
    );
  }
}

ImagesPresentation.defaultProps = {
  images: [
    `https://unsplash.it/${
      Math.floor(Math.random() * 500)
      }/${
      Math.floor(Math.random() * 500)
    }/?random`,
    `https://unsplash.it/${
      Math.floor(Math.random() * 500)
      }/${
      Math.floor(Math.random() * 500)
    }/?random`,
    `https://unsplash.it/${
      Math.floor(Math.random() * 500)
      }/${
      Math.floor(Math.random() * 500)
      }/?random`
  ]
};

ImagesPresentation.propTypes = {
  images: PropTypes.array
};

export default ImagesPresentation;