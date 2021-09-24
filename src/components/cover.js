import React, { Component, useState } from "react";
import { coverDiv, cover } from "../css/cover.module.css";

function Cover(props) {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    // <div className={coverDiv}>
    <div className={isActive ? cover : props.class} onClick={toggleClass}>
      <p>{props.text}</p>
      {/* </div> */}
    </div>
  );
}

export default Cover;
