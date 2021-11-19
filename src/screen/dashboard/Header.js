import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Connect from "../../assets/ico/default.svg";

import "./Header.scss";

export default function Header() {
  const [bSticky, setSticky] = useState(false);
  const [bHeader, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 40) setSticky(true);
    else setSticky(false);
  };

  return (
    <div className="headerContainer1">
      <div className="headerOther">
        <div
          className={"topBar " + (bHeader ? "topBarSelected" : "")}
          onClick={() => {
            setHeader(!bHeader);
          }}
        >
          {bHeader ? <p className="close">Close</p> : <Svg_Hamburgar />}
        </div>
        {bHeader && (
          <div className="hamContainer">
            <p className="title">DASHBOARD</p>
            <p className="val">Use our desktop website to access dashboard.</p>
            <Link to="/">
              <ConnectBtn />
            </Link>
          </div>
        )}
      </div>
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
      HOME
    </div>
  );
}

function Svg_Hamburgar() {
  return (
    <svg
      width="34"
      height="29"
      viewBox="0 0 34 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 16.5833V17.5833H2H32H33V16.5833V12.4167V11.4167H32H2H1V12.4167V16.5833ZM1 27V28H2H32H33V27V22.8333V21.8333H32H2H1V22.8333V27ZM2 1H1V2V6.16667V7.16667H2H32H33V6.16667V2V1H32H2Z"
        fill="white"
        stroke="#29211B"
        stroke-width="2"
      />
    </svg>
  );
}
