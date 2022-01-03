import React, { memo } from "react";
import { dragTarget } from "../css/drag.module.css";
import { useDrop } from "react-dnd";

export const Dustbin = memo(function Dustbin({ accept, onDrop }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = isOver && canDrop;
  return (
    <div
      ref={drop}
      role="Dustbin"
      className={dragTarget}
      style={canDrop ? { opacity: 0.5 } : { opacity: 0 }}
    >
      <h2>{canDrop ? "Drag here" : ""}</h2>
      {/* {lastDroppedItem && (<p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>)} */}
    </div>
  );
});
