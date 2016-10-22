import React, { Component } from 'react';
import "./SettingsTab.css";

class SettingsTab extends Component {
	render() {
		return (
			<div className="SettingsTab">
				<div className="tabDecoratorParent">
					<div className="tabDecorator"></div>
				</div>
				<div>{this.props.name}</div>
			</div>
		);
	}
}

export default SettingsTab;