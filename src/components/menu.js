import * as React from "react";
import Navigator from "./navigator.js";

const Menus = () => {
  return (
    <div>
      <Navigator menu="Design" link="/about" />
      <Navigator menu="Resume" link="/404" />
      <Navigator menu="Animation" link="/hello" />
    </div>
  );
};

export default Menus;
