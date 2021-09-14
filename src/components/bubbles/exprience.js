import * as React from "react";
import {
  frontExprience,
  back,
  backImage,
  exprience,
  frontContent,
} from "../../css/bubble.module.css";

const ExprienceBubble = () => {
  return (
    <div className={exprience + " " + backImage}>
      <div className={frontContent + " " + frontExprience}>
        <p>CourseMIRROR</p>
      </div>
      <div className={back}>
        {/* <p>Web Full Stack Developer</p>
        <p>10/2020 - Current</p> */}
      </div>
    </div>
  );
};

export default ExprienceBubble;
