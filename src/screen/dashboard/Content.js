import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

import Background from "../../assets/background/roadMap.png";

import "./Content.scss";

export default function Content() {
  return (
    <div className="content" style={{ backgroundImage: `url(${Background})` }}>
      <TopBar />
      <BottomBar />
    </div>
  );
}
