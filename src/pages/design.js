import * as React from "react";
import ReactTypingEffect from "react-typing-effect";
import Layout from "../components/layout.js";
import { text } from "../css/design.module.css";

const Design = () => {
  return (
    <Layout>
      <ReactTypingEffect
        className={text}
        text={"Hello."}
        eraseDelay={100000000000}
      />
    </Layout>
  );
};

export default Design;
