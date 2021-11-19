import React from "react";
import { Link } from "react-router-dom";

import SocialBtn from "../../components/SocialBtn";

import OpenSea from "../../assets/ico/opensea.svg";
import Discord from "../../assets/ico/discord.svg";
import Twitter from "../../assets/ico/twitter.svg";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerBar">
        <p>Wulfs 2021</p>
        <div className="social">
        <a href="http://opensea.io/wulfzNFT" target="_blank">
            <SocialBtn src={OpenSea} />
          </a>
          <a href="http://discord.gg/wulfz" target="_blank">
            <SocialBtn src={Discord} />
          </a>
          <a href="https://twitter.com/yeezyslide" target="_blank">
            <SocialBtn src={Twitter} />
          </a>
        </div>
      </div>
    </div>
  );
}
