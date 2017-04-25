import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

import styles from "./GenericTemplate.css";

const GenericTemplate = ({ title, header, hero, menu, children, footer, ...props }) => {
  return (
    <div className={styles.app}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className={styles.content}>
        {header}
        {menu}
        {hero}
        {children}
      </div>
      {footer}
    </div>
  );
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.element.isRequired,
  header: PropTypes.element.isRequired,
  hero: PropTypes.element.isRequired,
  menu: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

export default GenericTemplate;