import "./TopBar.scss";

import Top1 from "../../assets/dashboard/top1.png";
import Top2 from "../../assets/dashboard/top2.png";
import Top3 from "../../assets/dashboard/top3.png";
import TopBack from "../../assets/dashboard/topBack.svg";

export default function TopBar() {
  return (
    <div className="topBar">
      <TopItem txt="STAKED" src={Top1} val="8" fontSize={36} />
      <TopItem txt="YIELD" src={Top2} val="$10/DAY" fontSize={26} />
      <TopItem txt="BALANCE" src={Top3} val="$300" fontSize={36} />
    </div>
  );
}

function TopItem(props) {
  return (
    <div className="topItem">
      <p className="txt">{props.txt}</p>
      <div className="bottom">
        <img src={props.src} style={{ width: "auto", height: "120px", zIndex: 99 }} />
        <div style={{ backgroundImage: `url(${TopBack})` }} className="backImg">
          <p style={{ fontSize: `${props.fontSize}px` }}>{props.val}</p>
        </div>
      </div>
    </div>
  );
}
