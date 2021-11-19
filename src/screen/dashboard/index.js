import React from "react";

import SideBar from "./SideBar";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

import "./index.scss";

export default function DashBoard() {
  return (
    <div className="container">
      <SideBar />
      <Content />
      <Header />
      <Footer />
    </div>
  );
}
