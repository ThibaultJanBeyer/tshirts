import React from "react";

import styles from "./OptionTopTags.css";

const OptionTopTags = () => {
  const topTags = [ "foo", "bar", "baz" ];
  const TopTags = topTags.map(function(tt) {
    return (
      <span key={tt}>
        <a href="">
          {tt}
        </a>, </span>
    );
  });

  return (
    <fieldset className={styles["OptionTopTags"]} role="group" aria-labelledby="toptags">
      <legend className={styles["OptionTopTags__legend"]} id="toptags">
        Top Tags:
      </legend>
      {TopTags}
    </fieldset>
  );
};

export default OptionTopTags;