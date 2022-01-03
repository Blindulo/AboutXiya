import * as React from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./itemTypes.js";
import { dragTarget } from "../css/drag.module.css";

const Dustbin = ({ canDrop, isOver, connectDropTarget }) => {
  const isActive = canDrop && isOver;
  return (
    <div
      ref={connectDropTarget}
      // style={backgroundColor}
      role="Dustbin"
      className={dragTarget}
      style={canDrop ? { opacity: 0.5 } : { opacity: 0 }}
    >
      <h2>{canDrop ? "Drag here" : ""}</h2>
    </div>
  );
};
export default DropTarget(
  ItemTypes.BUBBLE,
  {
    drop: () => ({ name: "Dustbin" }),
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(Dustbin);
