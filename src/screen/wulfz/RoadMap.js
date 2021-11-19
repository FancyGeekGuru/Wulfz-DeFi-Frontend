import React, { useState } from "react";

import awooImage from "../../assets/roadmap/awoo.svg";
import breedingImage from "../../assets/roadmap/breeding.svg";
import evolvingImage from "../../assets/roadmap/evolving.svg";
import merchImage from "../../assets/roadmap/merch.svg";
import futureImage from "../../assets/roadmap/futurePlan.svg";
import buttonImage from "../../assets/roadmap/button.svg";

import Background from "../../assets/background/roadMap.png";

import "./RoadMap.scss";

export default function RoadMap() {
  const [phase, setPhase] = useState(0);
  const phases = [awooImage, breedingImage, merchImage, futureImage];

  return (
    <div
      className="loadMapContainer"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="sideBar1">
        {phases.map((src, index) => (
          <RoadMapButton
            src={src}
            active={index == phase}
            onPress={() => {
              setPhase(index);
            }}
          />
        ))}
      </div>
      {phase == 0 ? (
        <PhaseSection1
          section="PHASE 1"
          title="$AWOO"
          description="$AWOO is the utility token of the wulfz ecosystem. Each wulfz generates 10 $awoo per day when staked via the wulfz house. $awoo is also the governance token for the wulfz pack and will be using for proposals and voting along the roadmap."
          src={awooImage}
        />
      ) : phase == 1 ? (
        <PhaseSection2 />
      ) : phase == 2 ? (
        <PhaseSection1
          section="PHASE 3"
          title="Merch"
          description="There will be a shop tab via our Wulfz Hub where you can redeem the $AWOO you have earned for physical Wulfz Merch, allowing you to represent the pack in real life!"
          src={merchImage}
        />
      ) : (
        <PhaseSection1
          section="PHASE 4"
          title="Future Plans"
          description="We have many future plans for the Wulfz aside from what has been listed in the previous phases, however those will be revealed at a later time. Overall though, we are hoping to expand into the metaverse and expand the ecosystem of the Wulfz through $AWOO."
          src={futureImage}
        />
      )}
    </div>
  );
}

function RoadMapButton(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${buttonImage})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
      className={"phaseButton " + (props.active ? "" : "fadeButton")}
      onClick={props.onPress}
    >
      <img src={props.src} />
    </div>
  );
}

function PhaseSection1(props) {
  return (
    <div className="content1 content1-center">
      <p className="section">{props.section}</p>
      <p className="title">{props.title}</p>
      <p className="description">{props.description}</p>
      <img className="img" src={props.src} />
    </div>
  );
}

function PhaseSection2(props) {
  return (
    <div className="content1">
      <p className="section">Phase 2</p>
      <p className="title">Breeding</p>
      <div className="flexRow">
        <p className="description">
          Having 2 wulfz and xxx amount of $awoo will allow you to breed a Cubz.
          The total supply of Cubz is 10,000
        </p>
        <img className="img2" src={evolvingImage} />
      </div>
      <p className="title">Evolving</p>
      <div className="flexRow">
        <p className="description">
          1 Wulfz + xxx amount of $awoo will allow you to evolve your Wulfz into
          Alpha Wulfz. There is only 1,000 total Wulfz that can be evolved.
        </p>
        <img className="img2" src={evolvingImage} />
      </div>
    </div>
  );
}
