import * as React from "react";
import Draggable from "react-draggable";
import {
  frontAcademic1,
  back,
  backImage,
  academic1,
  frontContent,
} from "../../css/bubble.module.css";

// class Academic1Bubble extends React.Component {
//   render() {
//     return (
//       <Draggable
//         axis="both"
//         handle=".handle"
//         defaultPosition={{ x: 0, y: 0 }}
//         position={null}
//         grid={[25, 25]}
//         scale={1}
//         onStart={this.handleStart}
//         onDrag={this.handleDrag}
//         onStop={this.handleStop}
//       >
//         <div>
//           <div className="handle">Drag from here</div>
//           <div>This readme is really dragging on...</div>
//         </div>
//       </Draggable>
//     );
//   }
// }

const Academic1Bubble = () => {
  return (
    // <Draggable
    //   axis="both"
    //   handle=".handle"
    //   defaultPosition={{ x: 0, y: 0 }}
    //   position={null}
    //   grid={[25, 25]}
    //   scale={1}
    //   onStart={this.handleStart}
    //   onDrag={this.handleDrag}
    //   onStop={this.handleStop}
    // >
    <div className={academic1 + " " + backImage}>
      <div className={frontContent + " " + frontAcademic1}>
        <p>University of Pittsburgh</p>
      </div>
      <div className={back}>
        {/* <p>Information Science</p>
        <p>Master's</p> */}
      </div>
    </div>
    // </Draggable>
  );
};

export default Academic1Bubble;
