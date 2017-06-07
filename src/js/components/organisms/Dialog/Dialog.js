import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

import {
  A11yDialog
} from "components";

import styles from "./Dialog.css";

class Dialog extends React.Component {
  constructor(props) {
    super(props);

    const { dialog } = queryString.parse(location.search);

    this.state = {};
  }

  componentDidMount() {
    // setup the dialog
    const dialog = new A11yDialog(document.getElementById('Dialog'));
  }

  componentDidUpdate() {
    // setup the dialog
    const dialog = new A11yDialog(document.getElementById('Dialog'));
  }

  render() {
    // type = login / register
    return (
      <div className={styles["Dialog"]} id="Dialog" aria-hidden="true">
        <div className={styles["Dialog__shadow"]} tabIndex="-1" data-a11y-dialog-hide />

        <div className={styles["Dialog__window"]} role="dialog" aria-labelledby="Dialog-title">
          <div className={styles["Dialog__document"]} role="document">
            <button className={styles["Dialog__close"]} type="button" data-a11y-dialog-hide aria-label="Close this dialog window" tabIndex="0">
              &times;
            </button>

            <h2 className={styles["Dialog__title"]} id="Dialog-title">Authentificate</h2>

            <form>
              <h3>Login / Register</h3>
              <label htmlFor="email">Email:</label>
              <input name="email" type="text"/>
              <label htmlFor="password">Password:</label>
              <input password="password" type="password"/>
              <input type="submit"/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Dialog;