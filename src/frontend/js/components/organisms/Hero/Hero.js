import React from "react";

import styles from "./Hero.css";
import {
  FlexibleImg,
  HeaderFeatures,
  theme
} from "components";

const Hero = () => {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero__main"]}>
        <FlexibleImg source="https://unsplash.it/1000/500/?random"/>
      </div>
      <div className={theme.constrain}>
        <div className={styles["hero__second"]}>
          <FlexibleImg source="https://unsplash.it/5000/2000/?random"/>
        </div>
        <div className={styles["hero__third"]}>
          <FlexibleImg source="https://unsplash.it/500/200/?random"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;