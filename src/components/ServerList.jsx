import React, { Component } from 'react';
import "./css/ServerList.css";

class ServerList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			state: props.isOpen
		};
	}

	render() {
		ServerList.instance = this;

		return (
			<div
			className={this.state.isOpen === true ? "ServerList open" : "ServerList"}
			id="ServerList">
			</div>
		);
	}

	setOpen(bool) {
		var state = this.state;
		state.isOpen = bool;
		this.setState(state);
		this.render();
	}
}

export default ServerList;