import React, { Component } from 'react';
import logo from "../../public/logo.svg";
import discordLogo from "../../public/discord.svg";
import "./Login.css";

class Login extends Component {
	render() {
		return (
			<div className="loginBack">
				<section className="header">
					<div id="UserDisplay"></div>
					<div className="title">FredBoat</div>
				</section>
				<div className="logoDiv">
					<img className="fbLogo" src={logo} draggable="false" alt="logo"></img>
					<div className="loginPlus">+</div>
					<img className="discordLogo" src={discordLogo} draggable="false" alt="logo"></img>
				</div>
			</div>
		);
	}
}

export default Login;