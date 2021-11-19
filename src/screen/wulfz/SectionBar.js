import "./SectionBar.scss";

export default function SectionBar(props) {
  return (
    <div className="sectionBar">
      <Svg_SectionSymbol />
      <p>{props.txt}</p>
      <Svg_SectionSymbol />
    </div>
  );
}

function Svg_SectionSymbol() {
  return (
    <div className="svg">
      <svg
        width="26"
        height="34"
        viewBox="0 0 26 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="4" width="26" height="25" fill="#4A231C" />
        <rect x="7" width="13" height="34" fill="#4A231C" />
      </svg>
    </div>
  );
}
