import React, { useState } from "react";
import Logo from "../components/vertnoir/component/logo-head.js";
import { container } from "../components/vertnoir/css/homePage.module.css";
import VideoPlayer from "../components/vertnoir/component/video.js";

const Home = () => {
  return (
    <div className={container}>
      <Logo></Logo>
      <VideoPlayer></VideoPlayer>
    </div>
  );
};

export default Home;
