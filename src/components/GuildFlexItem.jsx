import React, { Component } from 'react';
import { Link } from "react-router";
import "./css/GuildFlexItem.css";

class GuildFlexItem extends Component {
	render() {
		var iconStyle = {};

		iconStyle["backgroundImage"] = "url(" + this.props.guild.icon + ")";

		return (
			<div className="GuildFlexItem">
				<div className="serverIcon" style={iconStyle}></div>
				<div className="flexboxGuildTitle">{this.props.guild.name}</div>

				<div className="flexboxInfoRow">
					<div className="flexboxLabel"></div>
					<div className="flexboxData"></div>
				</div>
				
				<div className="flexboxInfoRow">
					<div className="flexboxLabel"></div>
					<div className="flexboxData"></div>
				</div>

				<div className="manageLink">
					<Link to={"/manage/" + this.props.guild.name}>MANAGE</Link>
				</div>
			</div>
		);
	}
}

export default GuildFlexItem;