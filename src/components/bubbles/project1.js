import * as React from "react";
import {
  frontProject1,
  back,
  backImage,
  project1,
  frontContent,
} from "../../css/bubble.module.css";

const Project1Bubble = () => {
  return (
    <div className={project1 + " " + backImage}>
      <div className={frontContent + " " + frontProject1}>
        <p>Japanese Learning and Teaching Websites</p>
      </div>
      <div className={back}>
        {/* <p>JavaScript + PHP + SQL</p>
        <p>Personal Project</p> */}
      </div>
    </div>
  );
};

export default Project1Bubble;
