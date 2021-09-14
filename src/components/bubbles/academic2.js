import * as React from "react";
import {
  frontAcademic2,
  back,
  backImage,
  academic2,
  frontContent,
} from "../../css/bubble.module.css";

const Academic2Bubble = () => {
  return (
    <div className={academic2 + " " + backImage}>
      <div className={frontContent + " " + frontAcademic2}>
        <p>Nanjing University of Information Science and Technology</p>
      </div>
      <div className={back}>
        {/* <p>Computer Science and Technology</p>
        <p>Bachelor's</p> */}
      </div>
    </div>
  );
};

export default Academic2Bubble;
