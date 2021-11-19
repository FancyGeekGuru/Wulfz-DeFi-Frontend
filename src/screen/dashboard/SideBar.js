import React, { useState } from "react";
import { Link } from "react-router-dom";

import SocialBtn from "../../components/SocialBtn";

import OpenSea from "../../assets/ico/opensea.svg";
import Discord from "../../assets/ico/discord.svg";
import Twitter from "../../assets/ico/twitter.svg";
import Home from "../../assets/ico/home.svg";
import Connect from "../../assets/ico/default.svg";

import "./SideBar.scss";

export default function SideBar() {
  const [index, setIndex] = useState(0);
  const menus = ["WULFZ HOUSE", "DAYCARE", "FULL MOON", "SHOP"];
  return (
    <div className="sideBar">
      <div className="top">
        {menus.map((menu, mIndex) => (
          <MenuItem
            txt={menu}
            active={index == mIndex}
            onClick={() => {
              setIndex(mIndex);
            }}
          />
        ))}
      </div>
      <div className="bottom">
        <a href="http://opensea.io/wulfzNFT" target="_blank">
          <SocialBtn src={OpenSea} />
        </a>
        <a href="http://discord.gg/wulfz" target="_blank">
          <SocialBtn src={Discord} />
        </a>
        <a href="https://twitter.com/yeezyslide" target="_blank">
          <SocialBtn src={Twitter} />
        </a>
        <div className="selectedItem">
          <Svg_Line />
          <Link to="/">
            <SocialBtn src={Home} />
          </Link>
          <Svg_Line />
        </div>
        <ConnectBtn />
      </div>
    </div>
  );
}

function MenuItem(props) {
  return (
    <div
      className={"menuItem " + (props.active ? "activeItem" : "")}
      onClick={props.onClick}
    >
      <p>{props.txt}</p>
    </div>
  );
}

function ConnectBtn(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${Connect})`,
        width: "180px",
        height: "64px",
        fontSize: "26px",
      }}
      className="connectButton"
    >
      Connect
    </div>
  );
}

function Svg_Line() {
  return (
    <svg
      width="40"
      height="4"
      viewBox="0 0 40 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="4" fill="#29211B" />
    </svg>
  );
}
