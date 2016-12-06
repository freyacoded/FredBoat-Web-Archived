import React, { Component } from 'react';

import DiscordGuild from "../control/DiscordGuild";
import ServerDisplay from "../components/ServerDisplay";
import ServerList from "../components/ServerList";
import logo from "../../public/logo.svg";
import UserDisplay from "../components/UserDisplay";

class Header extends Component {

	render() {
		return (
			<div>
				<section className="header">
					<div id="UserDisplay">
						<UserDisplay username="Fre_d 👻#2939" avatarUrl="https://cdn.discordapp.com/avatars/81011298891993088/f59d807bd63741ca24cb2556518aa35a.jpg"/>
					</div>
					<div className="title">FredBoat</div>
					<ServerDisplay guild={DiscordGuild.placeholder}/>
				</section>
				<div id="serverListContainer">
					<ServerList isOpen={false}/>
				</div>
				<section className="logoSection">
					<img className="logo" src={logo} style={{display: "none"}} alt="logo" draggable="false"/>
				</section>
			</div>
			);
	}
}

export default Header;