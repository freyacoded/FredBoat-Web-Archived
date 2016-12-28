import React, { Component } from "react";
import TabManager from "../control/TabManager";
import "./css/SettingsTab.css";

class SettingsTab extends Component {
    onClick = () => {
        TabManager.setCurrentTab(this.props.index);
    }

    render() {
        const selected = this.props.index === TabManager.currentTab;

        return (
            <div
            className={selected ? "SettingsTab selected" : "SettingsTab"}
            style={selected ? {cursor: "default"} : {cursor: "pointer"}}
            onClick={this.onClick}>
                <div className="tabDecoratorParent">
                    <div className="tabDecorator"></div>
                </div>
                <div>{this.props.name}</div>
            </div>
        );
    }
}

export default SettingsTab;