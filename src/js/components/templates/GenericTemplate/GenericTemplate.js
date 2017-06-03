import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import { Dialog } from "components";

import styles from "./GenericTemplate.css";

const GenericTemplate = ({ title, header, menu, children, footer, ...props }) => {
  return (
    <div>
      <div id="main" className={styles.app}>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className={styles.content}>
          {header}
          {menu}
          {children}
        </div>
        {footer}
      </div>
      <Dialog />
    </div>
  );
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.object,
  header: PropTypes.object,
  menu: PropTypes.object,
  title: PropTypes.string
};

export default GenericTemplate;