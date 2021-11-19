import stackingBack from "../../assets/dashboard/stakingBack.svg";
import NumberButtonBack from "../../assets/dashboard/numberButton.svg";

import StakeButtonBack from "../../assets/dashboard/stakeButton.svg";
import UnStakeButtonBack from "../../assets/dashboard/unstakeButton.svg";

import Avatar from "../../assets/dashboard/top1.svg";
import Awoo from "../../assets/roadmap/awoo.svg";

import "./BottomBar.scss";

export default function BottomBar() {
  return (
    <div className="bottomBar">
      <Staking />
      <UnStaking />
    </div>
  );
}

function Staking() {
  return (
    <div
      style={{ backgroundImage: `url(${stackingBack})` }}
      className="staking"
    >
      <p className="title">Staking</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-around",
        }}
      >
        <StakingItem src={Avatar} txt="WULFZ: 3" val="Available" />
        <StakingItem src={Awoo} txt="$AWOO: 30" val="Per day" />
      </div>
      <div style={{ height: "24px" }} />
      <p className="txt">WULFZ ID</p>
      <div className="inputBlue">
        <p className="txt" style={{ marginBottom: 0 }}>
          123, 333, 4569
        </p>
      </div>
      <div style={{ marginTop: "32px" }}>
        <StakingButton src={StakeButtonBack} txt="STAKE" />
      </div>
    </div>
  );
}

function UnStaking() {
  return (
    <div
      style={{
        backgroundImage: `url(${stackingBack})`,
      }}
      className="staking"
    >
      <p className="title">UNSTAKING</p>

      <StakingItem src={Avatar} txt="WULFZ: 8" val="Staked" />
      <div style={{ height: "24px" }} />
      <p className="txt">WULFZ ID</p>
      <div className="inputRed">
        <p className="txt" style={{ marginBottom: 0 }}>
          123, 333, 4569
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "32px",
        }}
      >
        <NumberButton val="8" />
        <StakingButton src={UnStakeButtonBack} txt="CANCEL" />
        <NumberButton val="3" />
      </div>
    </div>
  );
}

function StakingItem(props) {
  return (
    <div className="stakingItem">
      <div
        style={{
          height: "72px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={props.src} style={{ width: "36px" }} />
      </div>
      <p className="txt">
        {props.txt}
      </p>
      <p className="val">{props.val}</p>
    </div>
  );
}

function NumberButton(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${NumberButtonBack})`,
        width: "64px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="txt" style={{ marginBottom: 0 }}>
        {props.val}
      </p>
    </div>
  );
}

function StakingButton(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.src})`,
        width: "180px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="txt" style={{ marginBottom: 0 }}>
        {props.txt}
      </p>
    </div>
  );
}
