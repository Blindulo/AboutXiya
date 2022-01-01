import { editor } from "monaco-editor";
import React from "react";

const Walk = (props) => {
  return (
    <div
      className={props.class}
      onMouseEnter={props.onMouseEnter}
      onTransitionEnd={props.onTransitionEnd}
    ></div>
  );
};

export default Walk;
