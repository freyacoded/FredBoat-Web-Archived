import React, { Component } from 'react';
import "./UserDisplay.css";

class UserDisplay extends Component {
	render() {
		//var style = "background-image: url(" + this.props.avatarUrl + ")";
		var style = {}
		style["backgroundImage"] = "url(" + this.props.avatarUrl + ")";
		return (
			<div id="UserDisplay" className="UserDisplay">
				<div className="loggedUserAvatar" style={style}>
					<div className="username">{this.props.username}</div>
				</div>
			</div>
		);
	}
}

export default UserDisplay;