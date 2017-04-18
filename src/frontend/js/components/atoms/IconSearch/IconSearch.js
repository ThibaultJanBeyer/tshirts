import React from "react";
import PropTypes from "prop-types";

const IconSearch = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" aria-labelledby="title">
      <title>Search</title>
      <path d="M16 16l-2.4-2.4c.3-.7.5-1.4.5-2 0-2-1.3-3.6-3.3-3.6s-3.4 1.6-3.4 3.5c0 2 1.5 3.5 3.4 3.5.8 0 1.5-.3 2-.7l.2.2 2 2.5c.3 0 .7 0 1-.2s.2-.7 0-.8zm-5.4-2.3c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.3 0 2.3 1 2.3 2.2 0 1.2-1 2.2-2.5 2.2z"/>
    </svg>
  );
};

IconSearch.propTypes = {
  className: PropTypes.string
};

export default IconSearch;
