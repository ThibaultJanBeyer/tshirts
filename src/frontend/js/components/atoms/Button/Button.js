import React from "react";
import PropTypes from "prop-types";

import { theme } from "components";

const Button = ({ primary, content }) => {
  return (
    <button className={`${theme["button"]} ${(primary) ? theme["button--primary"] : ""}`}>
      <span className={`${theme["button__helper"]}`}>
        {content}
      </span>
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  content: PropTypes.string
};

export default Button;
