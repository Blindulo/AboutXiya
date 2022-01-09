import React, { useState, memo } from "react";
import { useDrag } from "react-dnd";
import { disappear } from "../../css/bubble.module.css";
import Draggable from "react-draggable";
export const Box = memo(function Box({
  name,
  type,
  isDropped,
  bubbleText,
  frontClass,
  textClass,
  backClass,
  backText1,
  backText2,
}) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type]
  );
  const [isHover, setText] = useState(false);
  const handleStart = () => console.log("here");
  return (
    <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
    >
      <div
        className={isDropped ? frontClass + " " + disappear : frontClass}
        ref={drag}
        role="Box"
        data-testid={`bubble-${name}`}
        onMouseEnter={() => setText(true)}
        onMouseLeave={() => setText(false)}
        // style={isDropped ? { display: "none" } : { display: "block" }}
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
});
