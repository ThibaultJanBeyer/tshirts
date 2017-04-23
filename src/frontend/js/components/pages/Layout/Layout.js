import React from "react";
import PropTypes from "prop-types";

class Layout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element
};

export default Layout;