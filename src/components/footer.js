import * as React from "react";
import { breakLine, footerText } from "../css/footer.module.css";

const Footer = ({ children }) => {
  return (
    <div>
      <div className={breakLine}></div>
      <div className={footerText}>{children}</div>
    </div>
  );
};

export default Footer;
