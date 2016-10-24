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
				<div className="loginBody">
					<div className="loginText">
						Log in to Discord to manage FredBoat on your server.
						<p>(No not really, this site is just a preview.)</p>
					</div>

					<a className="authButton">
						Authenticate with Discord
					</a>
				</div>
				<div className="footer">
					<div className="footerText">
						FredBoat-Web &#169; Fre_d licensed under the <a href="https://github.com/Frederikam/FredBoat-Web/blob/master/LICENSE">MIT License</a>.
					</div>
				</div>
			</div>
		);
	}
}

export default Login;