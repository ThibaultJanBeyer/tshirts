import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import {
  Footer,
  Gallery,
  GenericTemplate,
  Header,
  MainMenu,
  ResultsTopbar,
  Sidebar,
  theme
} from "components";

import styles from './ShopPage.css';

class ShopPage extends React.Component {
  render() {
    const { location, match } = this.props;
    const { query } = match.params;
    const { sort="popular",
            product="tshirts" } = queryString.parse(location.search);

    return (
      <GenericTemplate  title="Homepage!"
                        header={<Header />}
                        menu={<MainMenu />}
                        footer={<Footer />} >
        <div className={theme["gutter"]}>
          <ResultsTopbar sort={sort} product={product} query={query} />
        </div>
        <div  className={theme["gutter"]}>
          <div className={`${theme["constrain"]} ${styles["ShopPage__body"]}`}>
            <Sidebar sort={sort} product={product}/>
            <Gallery  title={`${sort} ${product}`}
                      titleNode={false}
                      amount={12}
                      level={2} />
          </div>
        </div>

      </GenericTemplate>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(ShopPage);