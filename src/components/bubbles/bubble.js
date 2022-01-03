import React, { useState } from "react";
import { ItemTypes } from "../itemTypes.js";
import { DragSource } from "react-dnd";
import Draggable from "react-draggable";

const Bubble = ({
  bubbleText,
  frontClass,
  textClass,
  backClass,
  backText1,
  backText2,
  positionStyle,
  name,
  isDragging,
  connectDragSource,
  isDrop,
}) => {
  const [isHover, setText] = useState(false);
  return (
    <Draggable handle=".handle" defaultPosition={positionStyle}>
      <div
        className={frontClass}
        ref={connectDragSource}
        role={"Bubble"}
        data-testid={`bubble-${name}`}
        onMouseEnter={() => setText(true)}
        onMouseLeave={() => setText(false)}
        style={isDrop == "true" ? { display: "none" } : { display: "block" }}
      >
        <div
          className={textClass}
          style={isHover ? { display: "none" } : { display: "block" }}
        >
          <p>{bubbleText}</p>
        </div>
        <div
          className={backClass}
          style={!isHover ? { display: "none" } : { display: "block" }}
        >
          <p>{backText1}</p>
          <h3>{backText2}</h3>
        </div>
      </div>
    </Draggable>
  );
};
export default DragSource(
  ItemTypes.BUBBLE,
  {
    beginDrag: (props) => {
      return { name: props.name, isDrop: props.isDrop };
    },
    endDrag(props, monitor) {
      const item = monitor.getItem();
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        {
          item.isDrop = "true";
        }
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
  },
  (connect, monitor) => {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    };
  }
)(Bubble);
