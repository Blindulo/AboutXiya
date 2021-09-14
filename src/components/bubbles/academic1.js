import * as React from "react";
import {
  frontAcademic1,
  back,
  backImage,
  academic1,
  frontContent,
} from "../../css/bubble.module.css";

const Academic1Bubble = () => {
  return (
    <div className={academic1 + " " + backImage}>
      <div className={frontContent + " " + frontAcademic1}>
        <p>University of Pittsburgh</p>
      </div>
      <div className={back}>
        {/* <p>Information Science</p>
        <p>Master's</p> */}
      </div>
    </div>
  );
};

export default Academic1Bubble;
