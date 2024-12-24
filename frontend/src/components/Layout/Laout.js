import React from "react";
import Header from "../header/Header";
import Sidebar from "../header/Sidebar";

function Layout({ children }) {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
