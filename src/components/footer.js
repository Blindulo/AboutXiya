import * as React from "react";
import { breakLine, footerText, footerDiv } from "../css/footer.module.css";

const Footer = ({ text }) => {
  return (
    <div className={footerDiv}>
      <div className={breakLine}></div>
      <div className={footerText}>{text}</div>
    </div>
  );
};

export default Footer;
