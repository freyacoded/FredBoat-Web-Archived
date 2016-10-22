import React, { Component } from 'react';
import "./SettingsTab.css";

class SettingsTab extends Component {
	render() {
		return (
			<div class="SettingsTab">
				<div class="tabDecoratorParent">
					<div class="tabDecorator"></div>
				</div>
				<div>{this.props.name}</div>
			</div>
		);
	}
}

export default SettingsTab;