import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import{
  Footer,
  GenericTemplate,
  Header,
  ItemPresentation,
  MainMenu,
  ProductList,
  theme
} from "components";

class ItemPage extends React.Component {
  render() {
    return (
      <GenericTemplate  title="ItemPage!"
                        header={<Header />}
                        menu={<MainMenu />}
                        footer={<Footer />} >
        <div className={theme["gutter"]}>
          <div className={`${theme["constrain"]}`}>
            <ItemPresentation />
          </div>
        </div>
        <div className={theme["gutter"]}>
          <div className={`${theme["constrain"]}`}>
            <ProductList />
          </div>
        </div>
      </GenericTemplate>
    );
  }
}

// ItemPage.propTypes = {
//   match: PropTypes.object.isRequired
// };

export default ItemPage;