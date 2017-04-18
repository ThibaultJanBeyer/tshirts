import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const GenericTemplate = ({ title, header, hero, children, footer, ...props }) => {
  return (
    <div className="application">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {header}
      {hero}
      {children}
      {footer}
    </div>
  );
};

GenericTemplate.propTypes = {
  children: PropTypes.any.isRequired,
  footer: PropTypes.element.isRequired,
  header: PropTypes.element.isRequired,
  hero: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired
};

export default GenericTemplate;