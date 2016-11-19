import React, { Component } from 'react';
import DiscordGuild from "../control/DiscordGuild"
import ServerDisplay from "../components/ServerDisplay"
import ServerList from "../components/ServerList"
import Checkbox from "rc-checkbox";
import logo from "../../public/logo.svg";
import 'rc-checkbox/assets/index.css';
import "./App.css";

class App extends Component {

	componentDidMount() {
		TabManager.renderTabs();
	}

	render() {
		
		return (
			<div>
				<div className="wrapper">
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
						<img className="logo" src={logo} style={{display: "none"}} alt="logo" draggable="false"></img>
					</section>
					<section className="main">
						<section className="settingsLeftContainer">
							<div id="settingsLeft"></div>
						</section>
						<section className="page" id="page">
							<Checkbox classnName="rc-checkbox-x150"/>
						</section>
					</section>
				</div>
				<section className="footer">
					<div className="footerText">
						FredBoat-Web &#169; Fre_d licensed under the <a href="https://github.com/Frederikam/FredBoat-Web/blob/master/LICENSE">MIT License</a>.
					</div>
				</section>
			</div>
		);
	}
}

export default App;