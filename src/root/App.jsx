import React, { Component } from 'react';
import ServerDisplay from "../components/ServerDisplay"
import logo from "../../public/logo.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div>
				<div className="wrapper">
					<section className="header">
						<div id="UserDisplay"></div>
						<div className="title">FredBoat</div>
						<ServerDisplay name="Very very very long server name" iconUrl="https://cdn.discordapp.com/avatars/81011298891993088/f59d807bd63741ca24cb2556518aa35a.jpg"/>
					</section>
					<section className="logoSection">
						<img className="logo" src={logo} style={{display: "none"}} alt="logo" draggable="false"></img>
					</section>
					<section className="page" id="page">
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