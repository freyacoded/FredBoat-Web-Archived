import React, { Component } from 'react';
import "./css/ServerList.css";

class ServerList extends Component {
    render() {
        return (
            <div
            className={this.props.isOpen === true ? "ServerList open" : "ServerList"}
            id="ServerList">
            </div>
        );
    }
}

export default ServerList;