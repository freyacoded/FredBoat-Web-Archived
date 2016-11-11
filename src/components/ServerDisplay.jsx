import React, { Component } from 'react';
import "./css/ServerDisplay.css";

class ServerDisplay extends Component {
	render() {
		var style = {}
		style["backgroundImage"] = "url(" + this.props.iconUrl + ")";
		return (
			<div className="serverDisplayContainer">
				<div id="ServerDisplay" className="ServerDisplay">
					<div className="serverName">{this.props.name}</div>
					<div className="serverIcon" style={style}></div>
				</div>
			</div>
		);
	}
}

export default ServerDisplay;