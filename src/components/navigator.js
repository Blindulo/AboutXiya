import * as React from "react";
import { Link } from "gatsby";
import { slider, link } from "../css/navigator.module.css";
import { body } from "../css/theme.module.css";

const Navigator = (props) => {
  return (
    <Link to={props.link} className={link}>
      <span> {props.menu}</span>
      <span className={slider}></span>
    </Link>
  );
};

export default Navigator;
