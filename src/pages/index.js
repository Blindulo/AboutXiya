import * as React from "react";
import { body } from "../css/theme.module.css";
import Menus from "../components/menu";
import { menu } from "../css/index.module.css";

const IndexPage = () => {
  return (
    // <Layout pageTitle="Home Page">
    //   <p>I'm making this by following the Gatsby Tutorial.</p>
    //   <StaticImage
    //     alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
    //     src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
    //   />
    //   <Navigator></Navigator>
    // </Layout>
    <div className={menu}>
      <Menus></Menus>
    </div>
  );
};

export default IndexPage;
