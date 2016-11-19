import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SvgToggleButton from "./SvgToggleButton";
import ServerList from "./ServerList";
import SvgIconConfig from "../control/SvgIconConfig";
import "./css/ServerDisplay.css";

class ServerDisplay extends Component {

	onHamburgerClick(button) {
		ServerList.instance.setOpen(!button.state.toggle);

	}

	render() {
		var style = {}
		style["backgroundImage"] = "url(" + this.props.guild.icon + ")";
		return (
			<div className="serverDisplayContainer">
				<div id="ServerDisplay" className="ServerDisplay">
					<div className="serverIcon" style={style}></div>
					<div className="serverName">{this.props.guild.name}</div>
					<!--<SvgToggleButton
						width="32px"
						height="32px"
						type="hamburger" onClick={this.onHamburgerClick}
						id={"button-" + Math.random().toString(36).substring(12)}/>-->
				</div>
			</div>
		);
	}
}

export default ServerDisplay;