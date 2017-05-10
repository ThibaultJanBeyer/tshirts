import React from "react";
import PropTypes from "prop-types";

const ButtonLike = ({className}) => {
  return (
    <button>+ Like</button>
  );
};

ButtonLike.propTypes = {
  className: PropTypes.string
};

export default ButtonLike;
