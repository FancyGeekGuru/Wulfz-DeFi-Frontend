import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import MainBar from "./MainBar";
import SectionBar from "./SectionBar";
import RoadMap from "./RoadMap";
import OurTeam from "./OurTeam";

export default function Wulfz() {
  return (
    <div>
      <Header />
      <MainBar />
      <SectionBar txt="ROADMAP" />
      <RoadMap />
      <SectionBar txt="OUR TEAM" />
      <OurTeam />
      <Footer />
    </div>
  );
}
