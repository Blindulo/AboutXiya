import * as React from "react";
import Helmet from "react-helmet";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time

import { StaticImage } from "gatsby-plugin-image";

import Cover from "../components/cover.js";
import Layout from "../components/layout.js";
import Footer from "../components/footer.js";
import Academic1Bubble from "../components/bubbles/academic1.js";
import Academic2Bubble from "../components/bubbles/academic2.js";
import ExprienceBubble from "../components/bubbles/exprience.js";
import Project1Bubble from "../components/bubbles/project1.js";
import Project2Bubble from "../components/bubbles/project2.js";
import Project3Bubble from "../components/bubbles/project3.js";
import Walk from "../components/yyw/walk.js";
import App from "../components/dragTest.js";
import {
  witch,
  jar,
  window,
  footerDiv,
  nonDisplay,
} from "../css/index.module.css";

const IndexPage = () => {
  return (
    <div className={window}>
      {/* <App></App> */}
      <Cover text="When Xiya was created..." class={nonDisplay}></Cover>
      <Draggable>
        <Academic1Bubble></Academic1Bubble>
      </Draggable>
      <Academic2Bubble></Academic2Bubble>
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
        <div className={jar}>
          <StaticImage src="../images/jar.png" alt="a jar" />
        </div>
      </Layout>
      <Walk></Walk>
      <div className={footerDiv}>
        <Footer>
          <p>footer</p>
        </Footer>
      </div>
    </div>
  );
};

export default IndexPage;
