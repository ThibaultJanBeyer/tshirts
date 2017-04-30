import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import{
  Footer,
  GenericTemplate,
  Header,
  MainMenu,
  theme
} from "components";

class ItemPage extends React.Component {
  render() {
    const id = this.props.match.params.itemId;
    console.log(id);
    return (
      <GenericTemplate  title="ItemPage!"
                        header={<Header />}
                        menu={<MainMenu />}
                        footer={<Footer />} >
        <h1>{id}</h1>
      </GenericTemplate>
    );
  }
}

ItemPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(ItemPage);