import "font-awesome/css/font-awesome.min.css";

import './SocialBtn.scss';

export default function SocialBtn(props) {
  const style = { width: "64px", height: "64px" };
  return (
    <div style={style} className="socialBtn">
      <img src={props.src} />
    </div>
  );
}
