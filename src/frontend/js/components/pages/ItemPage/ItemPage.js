import React from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import{
  Footer,
  GenericTemplate,
  Header,
  ItemPresentation,
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
        <div className={theme["gutter"]}>
          <div className={`${theme["constrain"]}`}>
            <ItemPresentation item={id} />
          </div>
        </div>
      </GenericTemplate>
    );
  }
}

ItemPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(ItemPage);