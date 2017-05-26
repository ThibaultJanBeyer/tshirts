import React from "react";
import PropTypes from "prop-types";

const ButtonShare = ({className}) => {
  return (
    <button>+ Share</button>
  );
};

ButtonShare.propTypes = {
  className: PropTypes.string
};

export default ButtonShare;
