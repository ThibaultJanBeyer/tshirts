import React from 'react';
import { withRouter } from 'react-router-dom';
import { observer } from "mobx-react";
import PropTypes from 'prop-types';
import queryString from 'query-string';
import UserStore from "store/UserStore";

import {
  Footer,
  GenericTemplate,
  Header,
  MainMenu,
  theme
} from "components";

import styles from './ArtistsPage.css';

@observer
class ArtistsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const self = this;
    UserStore.refresh();
    console.log("xo");
  }

  render() {
    console.log(UserStore.users);
    const Emails = [];
    UserStore.users.forEach(e => {
      console.log(e.email)
      Emails.push(<div>{e.email}</div>);
    })
    console.log(Emails);
    return (
      <GenericTemplate  title="ArtistsPage!"
                        header={<Header />}
                        menu={<MainMenu />}
                        footer={<Footer />} >

        <div className={theme["gutter"]}>
          {Emails}
        </div>

      </GenericTemplate>
    );
  }
}

// ArtistsPage.propTypes = {
//   match: PropTypes.object.isRequired,
//   location: PropTypes.object.isRequired
// };

export default ArtistsPage;