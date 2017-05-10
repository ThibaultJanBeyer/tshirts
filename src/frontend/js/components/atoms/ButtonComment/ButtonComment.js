import React from "react";
import PropTypes from "prop-types";

const ButtonComment = ({className}) => {
  return (
    <button>+ Comment</button>
  );
};

ButtonComment.propTypes = {
  className: PropTypes.string
};

export default ButtonComment;
