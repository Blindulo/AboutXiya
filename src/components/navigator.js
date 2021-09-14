import * as React from "react";
import { Link } from "gatsby";
import { slider, links } from "../css/navigator.module.css";

const Navigator = (props) => {
  return (
    <Link to={props.link} className={links}>
      <span> {props.menu}</span>
      <span className={slider}></span>
    </Link>
  );
};

export default Navigator;
