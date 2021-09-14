import * as React from "react";
import { container } from "../css/layout.module.css";
import Menus from "../components/menu";
import { menu } from "../css/theme.module.css";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <div className={menu}>
        <Menus></Menus>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
