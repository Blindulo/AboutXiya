import * as React from "react";
import Navigator from "./navigator.js";

const Menus = () => {
  return (
    <div>
      <Navigator menu="Design" link="/design" />
      <Navigator menu="Resume" link="/resume" />
      <Navigator menu="Animation" link="/" />

      <Navigator menu="Home" link="/home-page" />
    </div>
  );
};

export default Menus;
