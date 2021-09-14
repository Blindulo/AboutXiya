import * as React from "react";
import Layout from "../components/layout.js";
import { StaticImage } from "gatsby-plugin-image";
import { witch } from "../css/index.module.css";

const Design = () => {
  return (
    <Layout>
      <StaticImage className={witch} src="../images/witch.png" />
    </Layout>
  );
};

export default Design;
