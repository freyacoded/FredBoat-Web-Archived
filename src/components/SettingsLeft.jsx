import React, { Component } from 'react';
import SettingsTab from "./SettingsTab.jsx";
import './SettingsLeft.css';

class SettingsLeft extends Component {
	render() {
		const list = this.props.tabs.map((name) =>
				<SettingsTab name={name} key={Math.random()}/>
			)

		return (
			<div className="SettingsLeft" id="SettingsLeft">
				<div className="settingsTitle">Settings</div>
				{list}
			</div>
		);
	}
}

export default SettingsLeft;