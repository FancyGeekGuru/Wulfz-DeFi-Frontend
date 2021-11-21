import artist from "../../assets/cubz-avatar/artist.png"
import developer from "../../assets/cubz-avatar/developer.png"
import founder from "../../assets/cubz-avatar/founder.png"
import partner from "../../assets/cubz-avatar/partner.png"
import quote from "../../assets/cubz-avatar/quote.png"
import teamBottom from "../../assets/cubz-avatar/bottom.png"

import Background from "../../assets/cubz-avatar/back.jpg"

import "./OurTeam.scss"
import "./OurTeam.css"

export default function OurTeam() {
	const members = [
		{
			name: "SLIDE",
			job: "FOUNDER",
			description:
				"Has had a vast experience with saas businesses,and is an entrepreneur by heart. He currently manages 1,500+ members via a subsription service.",
			src: founder,
		},
		{
			name: "SNOOOW",
			job: "ARTIST",
			description:
				"Professional UI designer and an artist of 6+ years. Always had passion with pixel art. Inspired by games, manga, literature, movies and more!",
			src: artist,
		},
		{
			name: "HIRO",
			job: "DEVELOPER",
			description:
				"Hiro is a senior blockchain and full-strack developer. Has a vast experience working at multiple different crypto projects within the past few years.",
			src: developer,
		},
		{
			name: "+MORE",
			job: "PARTNERS",
			description:
				"Dozens of mods and partners are helping wulfz to grow everyday!",
			src: partner,
		},
	]
	return (
		<div
			className="teamContainer"
			style={{
				backgroundImage: `url(${Background})`,
				backgroundSize: "100% 100%",
			}}
		>
			<div className="teamWrapper">
				<div className="group2Container">
					<div className="group2Wrapper">
						<TeamMember {...members[0]} />
						<TeamMember {...members[1]} />
					</div>
					<img
						src={teamBottom}
						style={{ height: "64px", width: "100%" }}
						className="bottomImgW"
					/>
				</div>
				<div className="group2Container">
					<div className="group2Wrapper">
						<TeamMember {...members[2]} />
						<TeamMember {...members[3]} />
					</div>
					<img
						src={teamBottom}
						style={{ height: "64px", width: "100%" }}
						className="bottomImgW"
					/>
				</div>
			</div>
			<img
				src={teamBottom}
				style={{
					height: "64px",
					width: "100%",
					marginBottom: "-4px",
				}}
				className="bottomImgT"
			/>
		</div>
	)
}

function TeamMember(props) {
	return (
		<div className="wrapper">
			<div className="teamMember">
				<p className="name">{props.name}</p>
				<p className="job">{props.job}</p>
				<div
					className="quote"
					style={{
						backgroundImage: `url(${quote})`,
						backgroundSize: "100% 100%",
					}}
				>
					<p className="description">{props.description}</p>
				</div>
				<Svg_Arrow />
				<img className="src" src={props.src} />
			</div>
			<img
				src={teamBottom}
				style={{ height: "64px", width: "100%" }}
				className="bottomImg"
			/>
		</div>
	)
}

function Svg_Arrow() {
	return (
		<svg
			width="24"
			height="20"
			viewBox="0 0 24 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.0001 20L0.741731 0.5L23.2584 0.500002L12.0001 20Z"
				fill="#543200"
			/>
		</svg>
	)
}
