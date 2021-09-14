import * as React from "react";
import {
  frontProject2,
  back,
  backImage,
  project2,
  frontContent,
} from "../../css/bubble.module.css";

const Project2Bubble = () => {
  return (
    <div className={project2 + " " + backImage}>
      <div className={frontContent + " " + frontProject2}>
        <p>AboutXiya</p>
      </div>
      <div className={back}>
        {/* <p>Gatsby + CSS3</p>
        <p>Personal Project</p> */}
      </div>
    </div>
  );
};

export default Project2Bubble;
