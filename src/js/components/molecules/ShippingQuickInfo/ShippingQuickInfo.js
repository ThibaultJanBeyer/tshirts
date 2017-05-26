import React from 'react';
import PropTypes from 'prop-types';

// import { theme } from 'components';

import style from './ShippingQuickInfo.css';

class ShippingQuickInfo extends React.Component {
  constructor(props) {
    super(props);

    this.fastCountries = [
      "BE", "BG", "CZ", "DK", "DE", "EE", "IE", "EL", "ES",
      "FR", "HR", "IT", "CY", "LV", "LT", "LU", "HU", "MT",
      "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE",
      "UK", "IS", "NO", "LI", "GB", "GBR"
    ];

    // default values
    const delivery = new Date();
          delivery.setDate(delivery.getDate() + 1);
    const country = "your country";

    this.state = { delivery, country };
  }

  componentDidMount() {
    const self = this;

    fetch("http://freegeoip.net/json/")
      .then((resp) => resp.json())
      .then(function(data) {
        const countryCode = data.country_code;
        const start = self.state.delivery;

        let additionalTime = 1;
        additionalTime += (self.fastCountries.includes(countryCode)) ? 1 : 5;
        start.setDate(start.getDate() + additionalTime);

        self.setState({
          delivery: start,
          country: data.country_name
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className={style['ShippingQuickInfo']}>
        <p>
          Shipping to {this.state.country} available
        </p>
        <p className={style['ShippingQuickInfo__subinfo']}>
          Estimated average delivery date: <br />
          by <span>{this.state.delivery.toLocaleDateString('de')}</span> (express)
        </p>
      </div>
    );
  }
}

export default ShippingQuickInfo;