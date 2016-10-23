import React, { Component } from 'react';
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
					</section>
					<section className="logoSection">
						<img className="logo" src={logo} style={{display: "none"}}></img>
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