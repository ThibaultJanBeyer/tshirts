import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import {
  Footer,
  GenericTemplate,
  Header,
  MainMenu
} from "components";

class ShopPage extends React.Component {
  render() {
    const { location } = this.props;
    const filter = queryString.parse(location.search).filter;

    return (
      <GenericTemplate  title="Homepage!"
                        header={<Header />}
                        menu={<MainMenu />}
                        footer={<Footer />} >
        <h2> {filter} </h2>
      </GenericTemplate>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(ShopPage);