import * as React from "react";
import { cover } from "../css/cover.module.css";

function test() {
  //   alert(1);
}
const Cover = ({ children }) => {
  // render() {
  //     const { render } = this.state;
  //     if (render === false) return null;
  //     return (<div className={cover} onClick={test}>
  //         {children}
  //       </div>);
  //   }
  return (
    <div className={cover} onClick={test()}>
      {children}
    </div>
  );
};

export default Cover;
