import React, { Component } from 'react';
import SettingsTab from "./SettingsTab.jsx";
import './SettingsLeft.css';

class SettingsLeft extends Component {
	render() {
		var i = -1;
		var inc = function(){
			i++;
			return i - 1;
		}
		const list = this.props.tabs.map((name) =>
				<SettingsTab name={name} key={Math.random()} selected={inc() == this.props.selected} index={i}/>
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