import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

// see: https://reacttraining.com/react-router/web/guides/scroll-restoration
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTop.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(ScrollToTop);