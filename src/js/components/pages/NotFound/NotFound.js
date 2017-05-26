import React from "react";
import PropTypes from "prop-types";

import{ GenericTemplate } from "components";

const NotFound = ({ location }) => {
  console.log(location);
  return (
    <GenericTemplate  title="404 not found">
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for ({location.pathname}) does not exist.</p>
      <p>Were you looking for one of these pages?</p>
      <ul>
        <li>
          Get phoenetic correspondences
        </li>
      </ul>
      <p>Here are some Pages that exist:</p>
      <ul>
        <li>
          Get main pages
        </li>
      </ul>
    </GenericTemplate>
  );
};

NotFound.propTypes = {
  location: PropTypes.object
};

export default NotFound;