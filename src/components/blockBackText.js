import React from "react";
import { style } from "../css/blockBackText.module.css";

function BlockBackText(props) {
  return (
    <div className={style} style={props.style}>
      {props.name}
    </div>
  );
}

export default BlockBackText;
