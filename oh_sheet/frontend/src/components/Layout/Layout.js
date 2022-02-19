import React from "react";
import "./Layout.css";
import Header from "./Header/Header";
import BottomMenu from "./BottomMenu/BottomMenu";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <div className="botom-menu-container">
        <BottomMenu />
      </div>
    </div>
  );
};

export default Layout;
