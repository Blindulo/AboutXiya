import React, { useState, useCallback, memo } from "react";
import { Dustbin } from "../components/dropTarget.js";
import { Box } from "../components/bubbles/bubble.js";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";
import {
  back,
  backImage,
  academic1,
  frontContent,
  textAcademic1,
  textAcademic2,
  academic2,
} from "../css/bubble.module.css";
export const Container = memo(function Container() {
  const [dustbins, setDustbins] = useState([
    {
      accepts: [ItemTypes.EDUCATION],
      lastDroppedItem: null,
    },
  ]);
  const [boxes] = useState([
    {
      name: "academic1",
      type: ItemTypes.EDUCATION,
      frontClass: `${academic1} ${backImage}`,
      textClass: `${frontContent} ${textAcademic1}`,
      bubbleText: "University of Pittsburgh",
      backClass: `${back} ${textAcademic1}`,
      backText1: "Information Science",
      backText2: "Master's",
    },
    {
      name: "academic2",
      type: ItemTypes.EDUCATION,
      frontClass: `${academic2} ${backImage}`,
      textClass: `${frontContent} ${textAcademic2}`,
      bubbleText: "Nanjing University of Information Science and Technology",
      backClass: `${back} ${textAcademic2}`,
      backText1: "Computer Science and Technology",
      backText2: "Bachelor's",
    },
  ]);
  const [droppedBoxNames, setDroppedBoxNames] = useState([]);
  function isDropped(boxName) {
    console.log(droppedBoxNames);
    return droppedBoxNames.indexOf(boxName) > -1;
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        })
      );
    },
    [droppedBoxNames, dustbins]
  );
  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        {boxes.map(
          (
            {
              name,
              type,
              frontClass,
              textClass,
              bubbleText,
              backClass,
              backText1,
              backText2,
            },
            index
          ) => (
            <Box
              name={name}
              type={type}
              isDropped={isDropped(name)}
              key={index}
              frontClass={frontClass}
              textClass={textClass}
              bubbleText={bubbleText}
              backClass={backClass}
              backText1={backText1}
              backText2={backText2}
            />
          )
        )}
      </div>
    </div>
  );
});
