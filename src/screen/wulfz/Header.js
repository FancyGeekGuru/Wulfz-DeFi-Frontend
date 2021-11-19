import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useEthers, useEtherBalance } from "@usedapp/core"

import SocialBtn from "../../components/SocialBtn"

import Connect from "../../assets/ico/default.svg"
import OpenSea from "../../assets/ico/opensea.svg"
import Discord from "../../assets/ico/discord.svg"
import Twitter from "../../assets/ico/twitter.svg"
import Home from "../../assets/ico/home.svg"

import "./Header.scss"

export default function Header() {
	const [bSticky, setSticky] = useState(false)
	const [bHeader, setHeader] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	})

	const handleScroll = () => {
		const scrollY = window.scrollY
		if (scrollY > 40) setSticky(true)
		else setSticky(false)
	}

	return (
		<div className="headerContainer">
			<div
				className={
					"headerBar " + (bSticky ? "headerSticky" : "headerTop")
				}
			>
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
				<div className="wallet-connect">
					<Link to="/dashboard">
						<SocialBtn src={Home} />
					</Link>
					<ConnectBtn />
				</div>
			</div>
			<div className="headerOther">
				<div
					className={"topBar " + (bHeader ? "topBarSelected" : "")}
					onClick={() => {
						setHeader(!bHeader)
					}}
				>
					{bHeader ? (
						<p className="close">Close</p>
					) : (
						<Svg_Hamburgar />
					)}
				</div>
				{bHeader && (
					<div className="hamContainer">
						<Link to="/dashboard">
							<SocialBtn src={Home} />
						</Link>
						<div className="social">
							<a
								href="http://opensea.io/wulfzNFT"
								target="_blank"
							>
								<SocialBtn src={OpenSea} />
							</a>
							<a href="http://discord.gg/wulfz" target="_blank">
								<SocialBtn src={Discord} />
							</a>
							<a
								href="https://twitter.com/yeezyslide"
								target="_blank"
							>
								<SocialBtn src={Twitter} />
							</a>
						</div>
						<ConnectBtn />
					</div>
				)}
			</div>
		</div>
	)
}

function ConnectBtn(props) {
	const { activateBrowserWallet, account } = useEthers()

	const handleWallet = () => {
		activateBrowserWallet()
	}

	return (
		<a
			style={{
				backgroundImage: `url(${Connect})`,
				width: "180px",
				height: "64px",
				fontSize: "26px",
			}}
			className="connectButton"
			onClick={activateBrowserWallet}
		>
			{account ? `${account.slice(0, 6)}...` : "Connect"}
		</a>
	)
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
	)
}
