import React, { Component } from 'react';

import DiscordGuild from "../control/DiscordGuild";

import Header from "../components/Header";
import Footer from "../components/Footer";
import GuildFlexItem from "../components/GuildFlexItem";

import "./ServerSelect.css";

class ServerSelect extends Component {
	render() {
		return (
			<div>
				<Header/>
				<div className="guildFlexbox">
					<GuildFlexItem guild={DiscordGuild.placeholder}/>
					<GuildFlexItem guild={DiscordGuild.placeholder}/>
					<GuildFlexItem guild={DiscordGuild.placeholder}/>
					<GuildFlexItem guild={DiscordGuild.placeholder}/>
					<GuildFlexItem guild={DiscordGuild.placeholder}/>
					<GuildFlexItem guild={DiscordGuild.placeholder}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default ServerSelect;