import React from "react";
import PropTypes from "prop-types";

const IconCart = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.6 486.6" aria-labelledby="title">
      <title>Your Shopping Cart</title>
      <path d="M146 320.4h268.2c30.4 0 55.2-24.8 55.2-55.2V150.6l-.2-.7v-1c-.2 0-.2-1-.3-1l-1-1v-1l-1-1s0-1-1-1l-.8-1v-.6l-.4-.7-.6-.4v-.6l-.8-.3-.3-.6h-.2l-.5-.6-.4-.4-.6-.6h-1l-.5-.3-.8-.3h-1c-.3-.5-.5-.5-.8-.5h-.3L118 92V43.4l-.2-.4v-1l-.3-.8v-.5l-.4-1v-3.2l-.2-.2-1-.5-.2-.2-.5-.5h-.7l-1.6-1L36 1c-7-2.8-14.8.4-17.7 7.3S18.6 23 25.5 26L91 53.6v295.7c0 28 21 51.2 48 54.7-5 8.3-7.8 18-7.8 28 0 30.2 24.5 54.6 54.5 54.6s54.5-24.5 54.5-54.5c0-10-2.7-19-7.5-27H354c-4.7 8-7.4 18-7.4 28 0 30 24.5 55 54.5 55s55-24 55-54-24-54-54-54H146c-15.5 0-28-12.5-28-28v-37c8 5 17.8 7.8 28 7.8zM213.4 432c0 15.2-12.4 27.5-27.5 27.5S158 447 158 432s12.4-27.5 27.5-27.5S213 416.8 213 432zm215.4 0c0 15.2-12.4 27.5-27.5 27.5S373.7 447 373.7 432s12.4-27.5 27.5-27.5 27.5 12.3 27.5 27.5zm-14.5-138.6h-268c-15.7 0-28.3-12.7-28.3-28.2v-146L442.3 164v101c0 15.8-12.7 28.4-28.2 28.4z"/>
    </svg>
  );
};

IconCart.propTypes = {
  className: PropTypes.string
};

export default IconCart;