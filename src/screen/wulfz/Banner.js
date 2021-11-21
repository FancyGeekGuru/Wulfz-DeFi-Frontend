import wolfImg from "../../assets/wolf-avatar/gif/avatar (1).gif";
import wulfzTxt from "../../assets/letter/wulfz.png";
import wolfButton from "../../assets/ico/default.svg";
import bannerPaper from "../../assets/background/banner-paper.svg";
import Wrapper from "../../assets/wolf-avatar/galleryWrap.png";

import "./Banner.scss";

export default function Banner() {
  return (
    <div className="bannerContainer">
      <div
        className="bannerPaper"
        style={{
          backgroundImage: `url(${bannerPaper})`,
          backgroundSize: "100%",
        }}
      >
        {/* <div className="wulfz-txt-header"> */}
        <img src={wulfzTxt} alt="" className="wulfz-txt-header" />
        {/* </div> */}

        <WolfAvatar type="default" />

        {/* <p>
          A pack of <span>5,555</span> Wulfz <br />
          finding their way through the metaverse. <br />
          Using the power of <span>$AWOO</span>, they can <br />
          expand and evolve to ensure that they <br />
          are prepared to defend themselves <br />
          against the unknown threat.
        </p> */}
        <p>
          A pack of <span>5,555</span> Wulfz finding their way through the
          metaverse. Using the power of <span>$AWOO</span>, they can expand and
          evolve to ensure that they are prepared to defend themselves against
          the unknown threat.
        </p>

        <div className="mintPackage">
          <WolfBtn txt="MINT 1" />
          <WolfBtn txt="MINT 2" />
        </div>
      </div>
    </div>
  );
}

function WolfAvatar() {
  return (
    <div
      style={{
        backgroundImage: `url(${Wrapper})`,
        backgroundSize: "100% 100%",
      }}
      className="wolfAvatar"
    >
      <img src={wolfImg} />
    </div>
  );
}

function WolfBtn({ txt }) {
  return (
    <div
      style={{
        backgroundImage: `url(${wolfButton})`,
      }}
      className="wolfButton"
    >
      {txt}
    </div>
  );
}
