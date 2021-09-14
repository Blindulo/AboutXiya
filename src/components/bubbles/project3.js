import * as React from "react";
import {
  frontProject3,
  back,
  backImage,
  project3,
  frontContent,
} from "../../css/bubble.module.css";

const Project3Bubble = () => {
  return (
    <div className={project3 + " " + backImage}>
      <div className={frontContent + " " + frontProject3}>
        <p>Leagues of Legends Games Result Prediction</p>
      </div>
      <div className={back}>
        {/* <p>Gatsby + CSS3</p>
        <p>Group Project</p> */}
      </div>
    </div>
  );
};

export default Project3Bubble;
