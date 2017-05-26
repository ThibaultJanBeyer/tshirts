import React from "react";
import PropTypes from "prop-types";

// import { theme, IconSearch } from "components";

// import style from "./FacebookEmbed.css";

const FacebookEmbed = ({ link, tabs, height, smallHeader, name }) => {
  return (
    <div className="fb-page"
      data-href={link}
      data-tabs={tabs}
      data-height={height}
      data-small-header={smallHeader}
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true">
      <blockquote
        cite={link}
        className="fb-xfbml-parse-ignore">
        <a href={link}>
          {name}</a>
      </blockquote>
    </div>
  );
};

FacebookEmbed.defaultProps = {
  link: "https://www.facebook.com/dotatwoshirts/",
  tabs: "timeline",
  height: "72",
  width: "300",
  smallHeader: "true",
  name: "Dota2shirts"
};

FacebookEmbed.propTypes = {
  link: PropTypes.string,
  tabs: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  smallHeader: PropTypes.string,
  name: PropTypes.string
};

export default FacebookEmbed;
