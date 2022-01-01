import React from "react";
import { cover } from "../css/cover.module.css";

function Cover(props) {
  return (
    <div className={props.class + " " + cover} onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  );
}

export default Cover;
