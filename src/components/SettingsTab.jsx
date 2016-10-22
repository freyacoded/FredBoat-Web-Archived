import React, { Component } from 'react';
import "./SettingsTab.css";

class SettingsTab extends Component {
	onClick = () => {
		console.log(this.props.index)
	}

	render() {
		return (
			<div className={this.props.selected ? "SettingsTab selected" : "SettingsTab"} onClick={this.onClick}>
				<div className="tabDecoratorParent">
					<div className="tabDecorator"></div>
				</div>
				<div>{this.props.name}</div>
			</div>
		);
	}
}

export default SettingsTab;