import Banner from "./Banner";
import Gallery from "./Gallery";

import Background from "../../assets/background/banner-bg.jpg";

export default function MainBar() {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100%",
      }}
    >
      <Banner />
      <Gallery />
    </div>
  );
}
