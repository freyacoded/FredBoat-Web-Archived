import React, { Component } from 'react';
import logo from "../../public/logo.svg";
import "./Login.css";

class Login extends Component {
	render() {
		return (
			<div className="loginBack">
				<section className="header">
					<div id="UserDisplay"></div>
					<div className="title">FredBoat</div>
				</section>
			</div>
		);
	}
}

export default Login;