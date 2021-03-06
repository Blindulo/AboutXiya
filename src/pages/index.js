import React, { useState, useCallback } from "react";
import Helmet from "react-helmet";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { StaticImage } from "gatsby-plugin-image";

import Cover from "../components/cover.js";
import Layout from "../components/layout.js";
import Academic1Bubble from "../components/bubbles/academic1.js";
import Academic2Bubble from "../components/bubbles/academic2.js";
import ExprienceBubble from "../components/bubbles/exprience.js";
import Project1Bubble from "../components/bubbles/project1.js";
import Project2Bubble from "../components/bubbles/project2.js";
import Project3Bubble from "../components/bubbles/project3.js";
import Walk from "../components/yyw/walk.js";
import DragAndDrop from "../components/dragAndDrop.js";

import {
  witch,
  jar,
  window,
  nonDisplay,
  display,
  walkLefttoRight,
  walkRighttoLeft,
} from "../css/index.module.css";

const IndexPage = () => {
  const [displayCover, setDisplayCover] = useState(true);
  const [isLefttoRight, setDirection] = useState(true);
  const hideCover = () => {
    setDisplayCover(!displayCover);
    setDirection(!isLefttoRight);
  };
  const setWalk = () => {
    setDirection(!isLefttoRight);
  };

  return (
    <div className={window}>
      <Cover
        text="When Xiya was created..."
        class={displayCover ? display : nonDisplay}
        onClick={hideCover}
      ></Cover>

      {/* <Academic1Bubble></Academic1Bubble> */}

      {/* <Academic2Bubble></Academic2Bubble> */}
      {/* <ExprienceBubble></ExprienceBubble>
      <Project1Bubble></Project1Bubble>
      <Project2Bubble></Project2Bubble>
      <Project3Bubble></Project3Bubble> */}
      <Layout>
        <Helmet>
          <script src="../../static/scripts/indexScript.js" />
        </Helmet>
        <div className={witch}>
          <StaticImage src="../images/witch.png" alt="a witch" />
        </div>

        <DndProvider backend={HTML5Backend}>
          <DragAndDrop />
        </DndProvider>

        <div className={jar}>
          <StaticImage src="../images/jar.png" alt="a jar" />
        </div>
      </Layout>
      <Walk
        class={isLefttoRight ? walkLefttoRight : walkRighttoLeft}
        onMouseEnter={setWalk}
        onTransitionEnd={setWalk}
      ></Walk>
    </div>
  );
};

export default IndexPage;
