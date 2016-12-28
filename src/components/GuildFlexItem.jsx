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
                <Link to={"/manage/" + this.props.guild.id}>
                    <div className="manageLink">Manage</div>
                </Link>
                
            </div>
        );
    }
}

export default GuildFlexItem;