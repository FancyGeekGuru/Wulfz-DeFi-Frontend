import "./Gallery.scss";

import Ninja from "../../assets/wolf-avatar/gif/avatar (1).gif";
import Fire from "../../assets/wolf-avatar/gif/avatar (2).gif";
import Laser from "../../assets/wolf-avatar/gif/avatar (3).gif";
import Command from "../../assets/wolf-avatar/gif/avatar (4).gif";
import Default from "../../assets/wolf-avatar/gif/avatar (5).gif";
import Wrapper from "../../assets/wolf-avatar/galleryWrap.png";

export default function Gallery() {
  return (
    <div className="gallery-container">
      <p className="gallery-header">XXX UNIQUE TRAITS</p>
      <p className="gallery-text">
        Wulfz traits are inspired by anime, pop-culture, movies, television, and
        books. We are not like the majority of pixel art NFTs. We have paid
        attention to the details with our project to make sure each wulfz looks
        perfect.
      </p>

      <div className="gallery">
        <div className="wrapper">
          <WolfAvatar src={Ninja} />
          <WolfAvatar src={Fire} />
          <WolfAvatar src={Laser} />
          <WolfAvatar src={Command} />
          <WolfAvatar src={Default} />
          <WolfAvatar src={Ninja} />
          <WolfAvatar src={Default} />
          <WolfAvatar src={Command} />
          <WolfAvatar src={Laser} />
          <WolfAvatar src={Default} />
        </div>
      </div>
    </div>
  );
}

function WolfAvatar(props) {
  return (
    <div
      className="wolfItem"
      style={{
        backgroundImage: `url(${Wrapper})`,
        backgroundSize: "100% 100%",
      }}
    >
      <img src={props.src} className="wolfAvatar" />
    </div>
  );
}
