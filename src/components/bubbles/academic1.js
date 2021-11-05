import * as React from "react";
import {
  frontAcademic1,
  back,
  backImage,
  academic1,
  frontContent,
} from "../../css/bubble.module.css";
import Draggable from "react-draggable";
// import { DragSource } from "react-dnd";

class Academic1Bubble extends React.Component {
  render() {
    return (
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: -600, y: 50 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        {/* <DragDropContainer> */}
        <div className={academic1 + " " + backImage + " handle"}>
          <div className={frontContent + " " + frontAcademic1}>
            <p>University of Pittsburgh</p>
          </div>
          <div className={back}>
            {/* <p>Information Science</p>
        <p>Master's</p> */}
          </div>
        </div>
        {/* </DragDropContainer> */}
      </Draggable>
    );
  }
}

export default Academic1Bubble;
